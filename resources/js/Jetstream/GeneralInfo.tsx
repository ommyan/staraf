import React from 'react';
import JetApplicationLogo from '@/Jetstream/ApplicationLogo';
import GeneralInfoForm from '@/Domains/Survey/GeneralInfoForm';
import useTypedPage from '@/Hooks/useTypedPage';

import { Session } from '@/types';


export default function GeneralInfo() {
  return (
    <div>
      <div className="p-6 sm:px-20 bg-white border-b border-gray-100">
          Entry Form General Info
        <div className="mt-6 text-gray-500">
          
        </div>
      </div>

      <div className="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2">
        <GeneralInfoForm  />
      </div>
    </div>
  );
}
