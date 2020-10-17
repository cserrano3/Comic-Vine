import React, {
    useCallback,
    useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHARACTERS_PER_SCROLL } from '../../../helpers/constants';
import { selectCharacters } from "../../../stateManagement/characters/selectors";
import getAllCharacters from "../../../useCases/getAllCharacters/getAllCharacters";
import CharacterListView from "./CharacterListView";

const initialCharactersAmount = 0;

export default function CharacterList() {
    const charactersList = useSelector(selectCharacters);

    const dispatch = useDispatch();

    const loadCharacters = useCallback(async (offset) => {
        getAllCharacters(CHARACTERS_PER_SCROLL, offset)(dispatch);
    }, []);

    useEffect(() => {
        loadCharacters(initialCharactersAmount);
    }, [loadCharacters]);

    return (
        <CharacterListView
            characters={charactersList}
            loadCharacters={loadCharacters}
        />
    );
}
