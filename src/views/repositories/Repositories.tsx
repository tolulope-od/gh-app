import React, { useState } from 'react';
import { RefreshIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import FilterComponent from '../../components/FilterComponent';
import SearchInput from '../../components/SearchInput';
import { IfilterList } from '../../interfaces/components.interfaces';
import Table from '../../components/Table';
import { fetchRepositories } from '../../redux/actions/helper';

const Repositories = () => {
  const filterList: IfilterList[] = [
    { label: 'name', value: 'name' },
    { label: 'alpha', value: 'alphacode' },
  ];
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');
  const [value, setValue] = useState('');
  const handleSearch = () => {
    const encodedStr = encodeURIComponent(value);
    dispatch(fetchRepositories(encodedStr));
  };

  const getAllCountries = () => {
    dispatch(fetchRepositories());
  };

  const handleClear = () => {
    setValue('');
    setSelected('');
    getAllCountries();
  };

  return (
    <div className="text-center flex w-full justify-center flex-col mt-9 flex-wrap">
      <div className=" md:mx-auto text-center place-item-center content-center justify-center align-center md:w-2/3 shadow p-5 rounded-lg bg-white">
        <div className="flex items-center justify-items-start mt-4">
          <FilterComponent
            selected={selected}
            setSelected={setSelected}
            filterList={filterList}
          />
          <SearchInput value={value} setValue={setValue} />
          <Button handleClick={handleSearch}>Search</Button>
          <Button className="ml-3" handleClick={handleClear}>
            <RefreshIcon className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Repositories;
