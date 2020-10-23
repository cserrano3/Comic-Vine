import React, {
    useCallback,
    useEffect,
    useMemo,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHARACTERS_PER_SCROLL } from '../../../helpers/constants';
import { startFetching } from "../../../stateManagement/characters/actions";
import { selectCharacters, selectScrollStatus } from "../../../stateManagement/characters/selectors";
import getAllCharacters from "../../../useCases/getAllCharacters/getAllCharacters";
import CharacterListView from "./CharacterListView";

const initialCharactersAmount = 0;

export default function CharacterList() {
    const charactersList = useSelector(selectCharacters);
    const scrollingStatus = useSelector(selectScrollStatus);
    const currentOffset = useSelector(state => state.characters.offset)

    const dispatch = useDispatch();

    const startFetch = useCallback((isIntersecting) => {
        console.log('holy sheeet')
        if (isIntersecting) {
            dispatch(startFetching("LOADING"))
        }
    }, [])

    useEffect(() => {
        getAllCharacters(CHARACTERS_PER_SCROLL, currentOffset)(dispatch);
    }, [scrollingStatus]) //sync isIntersecting as a depency to execute side effects


    return (
        <CharacterListView
            characters={charactersList}
            startFetching={startFetch}
            scrollingStatus={scrollingStatus}
        />
    );
}
