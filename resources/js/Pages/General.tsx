import React from 'react';
import GeneralInfo from '@/Jetstream/GeneralInfo';
import AppLayout from '@/Layouts/AppLayout';
import useTypedPage from '@/Hooks/useTypedPage';

import { Session } from '@/types';

interface Props {
  sessions: Session[];
}

export default function General() {
  const page = useTypedPage();

  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          General Info
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <GeneralInfo />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
