import throttle from "lodash.throttle";
import React, {
    useCallback,
    useEffect,
    useMemo,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHARACTERS_PER_SCROLL } from '../../../helpers/constants';
import { startFetching } from "../../../stateManagement/characters/actions";
import { selectCharacters, selectScrollStatus, selectCurrentOffset } from "../../../stateManagement/characters/selectors";
import getAllCharacters from "../../../useCases/getAllCharacters/getAllCharacters";
import CharacterListView from "./CharacterListView";

const initialCharactersAmount = 0;

export default function CharacterList() {
    const charactersList = useSelector(selectCharacters);
    const scrollingStatus = useSelector(selectScrollStatus);
    const currentOffset = useSelector(selectCurrentOffset);

    const dispatch = useDispatch();

    const startFetch = useCallback(() => {
        dispatch(startFetching("LOADING"))
    }, [startFetching])

    useEffect(() => {
        throttle(() => getAllCharacters(CHARACTERS_PER_SCROLL, currentOffset)(dispatch), 1.5)();
    }, [scrollingStatus])

    return (
        <CharacterListView
            characters={charactersList}
            startFetching={startFetch}
            scrollingStatus={scrollingStatus}
        />
    );
}
