'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = (
    {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = "Поиск",
        onChange,
        defaultValue,
        className
    }
) => {

    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    const list = showAll ? items.filter((item) =>item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems?.slice(0, limit);

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }


    return (
        <div className={cn("", className)}>
            <p className='font-bold mb-3'>{title}</p>
            {showAll && (
                <div className="mb-5">
                    <Input
                        type="text"
                        value={searchValue}
                        placeholder={searchInputPlaceholder}
                        className="border-none bg-grey-50"
                        onChange={onChangeSearchInput}
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {
                    list.map((item, index) => (
                        <FilterCheckbox
                            key={index}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={false}
                            onCheckedChange={(id) => console.log(id)}
                        />
                    ))
                }
            </div>

            {items.length > limit && (
                <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-primary mt-4 ml-1">
                        {showAll ? "Скрыть" : "+ Показать все"}
                    </button>
                </div>
            )}

        </div>
    );
};