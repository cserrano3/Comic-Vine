import React, {
    useCallback,
    useEffect,
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

    console.log('character list ------------ ', charactersList)

    const dispatch = useDispatch();

    const loadCharacters = useCallback(async (offset) => {
        console.log('OFFSET ----------- ', offset)
        getAllCharacters(CHARACTERS_PER_SCROLL, offset)(dispatch);
    }, []);


    const startFetch = useCallback(() => {
        dispatch(startFetching("LOADING"))
    }, [])

    return (
        <CharacterListView
            characters={charactersList}
            startFetching={startFetch}
            scrollingStatus={scrollingStatus}
            loadCharacters={loadCharacters}
        />
    );
}
