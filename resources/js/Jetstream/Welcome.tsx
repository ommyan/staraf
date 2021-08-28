import React from 'react';
import JetApplicationLogo from '@/Jetstream/ApplicationLogo';

export default function Welcome() {
  return (
    <div>
      <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
        <div>
          <JetApplicationLogo className="block h-12 w-auto" />
        </div>

        <div className="mt-8 text-2xl">
          Selamat Datang di Assesment Tool Aplikasi Sistem Keuangan Daerah Star AF BPKP
        </div>

        <div className="mt-6 text-gray-500">
          
        </div>
      </div>

      <div className="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2">
        <div className="p-6">
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-400"
            >
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <div className="ml-4 text-lg text-gray-600 leading-7 font-semibold">
              <a href="/general">General Info</a>
            </div>
          </div>

          <div className="ml-12">
            <div className="mt-2 text-sm text-gray-500">
              Menjaring informasi umum, informasi aplikasi, kategori aplikasi
              pemilik aplikasi, pengembang dan implementornya.
            </div>

            <a href="/general">
              <div className="mt-3 flex items-center text-sm font-semibold text-indigo-700">
                <div>Mulai mengisi </div>

                <div className="ml-1 text-indigo-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 md:border-t-0 md:border-l">
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-400"
            >
              <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <div className="ml-4 text-lg text-gray-600 leading-7 font-semibold">
              <a href="https://laracasts.com">Acquirement</a>
            </div>
          </div>

          <div className="ml-12">
            <div className="mt-2 text-sm text-gray-500">
              Menjaring informasi terkait cara perolehan aplikasi, kepemilikan
              versioning,biaya pemeliharaan,biaya perolehan dan tahun pembuatan.
            </div>

            <a href="/acquirement">
              <div className="mt-3 flex items-center text-sm font-semibold text-indigo-700">
                <div>Mulai Mengisi</div>

                <div className="ml-1 text-indigo-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-400"
            >
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <div className="ml-4 text-lg text-gray-600 leading-7 font-semibold">
              <a href="https://tailwindcss.com/">Architecture</a>
            </div>
          </div>

          <div className="ml-12">
            <div className="mt-2 text-sm text-gray-500">
              Menjaring informasi arsitektur aplikasi, sistem operasi yang digunakan
              baik dari sisi server maupun client.
            </div>
            <a href="/arsitektur">
              <div className="mt-3 flex items-center text-sm font-semibold text-indigo-700">
                <div>Mulai Mengisi</div>

                <div className="ml-1 text-indigo-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 md:border-l">
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-400"
            >
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <div className="ml-4 text-lg text-gray-600 leading-7 font-semibold">
              Kuesioner Utama
            </div>
          </div>

          <div className="ml-12">
            <div className="mt-2 text-sm text-gray-500">
              Terdapat 14 domain dalam kuesioner utama, menjaring informasi
              penting mulai dari perencanaan, implementasi dan evaluasi
            </div>
            <a href="/kuesioner">
              <div className="mt-3 flex items-center text-sm font-semibold text-indigo-700">
                <div>Mulai Mengisi</div>

                <div className="ml-1 text-indigo-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
