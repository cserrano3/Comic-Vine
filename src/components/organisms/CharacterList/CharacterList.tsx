import React, {
    useCallback,
    useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCharacters } from "../../../stateManagement/characters/selectors";
import getAllCharacters from "../../../useCases/getAllCharacters/getAllCharacters";
import CharacterListView from "./CharacterListView";

export default function CharacterList() {
    const charactersList = useSelector(selectCharacters);

    const dispatch = useDispatch();

    const loadCharacters = useCallback(async (offset) => {
        getAllCharacters(10, offset)(dispatch);
    }, []);

    useEffect(() => {
        loadCharacters(10);
    }, [loadCharacters]);

    return (
        <CharacterListView
            characters={charactersList}
            loadCharacters={loadCharacters}
        />
    );
}
