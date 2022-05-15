import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../interfaces/store.interfaces';
import { IRepositories } from '../interfaces/repositories.interfaces';
import { fetchCollaborators } from '../redux/actions/helper';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from './Pagination';
import Modal from './Modal';

const Table = () => {
  const {
    repositories,
    collaborators,
    loadingCollaborators,
  } = useSelector((state: StoreState) => state.Repositories);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [repoName, setRepoName] = useState('');
  const [repoFullName, setRepoFullName] = useState('');
  const [listPerPage] = useState(10);
  const indexOfLastCountry = currentPage * listPerPage;
  const indexOfFirstCountry = indexOfLastCountry - listPerPage;
  const currentRepositories = repositories.slice(
    indexOfFirstCountry,
    indexOfLastCountry,
  );
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const closeModal = () => {
    setModalOpen(false);
    setRepoName('');
    setRepoFullName('');
  };

  const openModal = (repo: IRepositories) => {
    setRepoName(repo.name);
    setRepoFullName(repo.full_name);
    dispatch(fetchCollaborators(repo.contributors_url));
    setModalOpen(true);
  };

  const RenderRow = () => currentRepositories.map((repository: any, index: number) => (index % 2 ? (
        <TableRow key={index} repository={repository} className="bg-gray-100" openModal={() => openModal(repository)} />
  ) : (
        <TableRow key={index} repository={repository} className="bg-white" openModal={() => openModal(repository)} />
  )));
  return (
    <div className="min-w-full">
      <Modal
        loadingCollaborators={loadingCollaborators}
        repositoryName={repoName}
        isOpen={modalOpen}
        onClose={closeModal}
        repositoryFullName={repoFullName}
        collaborators={collaborators}
      />
      <table className="w-full">
        <TableHeader />
        <tbody>
          <RenderRow />
        </tbody>
      </table>
      <Pagination
        listPerPage={listPerPage}
        paginateFront={paginateFront}
        currentPage={currentPage}
        paginateBack={paginateBack}
        totalCountries={repositories.length}
      />
    </div>
  );
};

export default Table;
