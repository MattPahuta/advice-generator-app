function AdviceCard({ advice, loading, onFetchAdvice }) {
  return (
    <div className="w-full max-w-135 relative flex flex-col items-center py-9 sm:py-10 px-6 sm:px-10 text-center bg-gray-700 rounded-xl shadow-2xl">
      <h1 className="mb-4 sm:mb-6 text-sm uppercase font-extrabold tracking-widest text-green-300">
        Advice # {advice?.id}
      </h1>
      <p className="text-2xl sm:text-3xl font-extrabold tracking-tight">
        "{advice?.advice}"
      </p>
      <div className="my-8 sm:my-10">
        <svg
          aria-hidden="true"
          focusable="false"
          className="hidden sm:block"
          width="444"
          height="16"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          className="sm:hidden"
          width="295"
          height="16"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <button
        type="button"
        aria-label="Get new advice"
        onClick={() => onFetchAdvice()}
        disabled={loading}
        className="absolute -bottom-8 p-5 bg-green-300 rounded-full cursor-pointer  outline-0 focus-visible:outline-2 outline-offset-4 outline-green-200 disabled:cursor-not-allowed hover:bg-green-200 active:shadow-[0_0_40px_#53ffaa] transition duration-300">
        <svg
          aria-hidden="true"
          focusable="false"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
}

export default AdviceCard;
