import React, { useState, createContext, useContext } from "react";

export const FilterContext = createContext({});

export const FilterProvider = ({ children }: any) => {
    const [filterTypes, setFilterTypes] = useState<any[]>([]);
    const [name, setName] = useState<string>("");

    return (
        <FilterContext.Provider value={{filterTypes, setFilterTypes, name, setName}}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext = () => {
    const { filterTypes, setFilterTypes, name, setName } = useContext<any>(FilterContext);

    return {
        filterTypes,
        setFilterTypes,
        name,
        setName
    }
}