import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IModal } from '../interfaces/components.interfaces';

const Modal: React.FC<IModal> = ({
  repositoryName, isOpen, onClose,
  repositoryFullName, collaborators, loadingCollaborators
}) => (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {repositoryName} <small>({repositoryFullName})</small>
                  </Dialog.Title>
                  <div className='mt-2' />
                  {loadingCollaborators && (
                    <>
                      <div className="py-2 flex flex-row">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                      </div>
                      <div className="py-2 flex flex-row">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </>
                  )}
                  {!loadingCollaborators && collaborators.map((collaborator) => (
                    <div key={collaborator.login} className="py-2 flex flex-row">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={collaborator.avatar_url}
                        alt={collaborator.login}
                      /> <p className="font-bold self-center ml-2">{collaborator.login}</p>
                    </div>
                  ))}

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
);

export default Modal;
