import Link from "next/link";

export default function PageNotFound() {
    return(
        <section className="dark:bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold dark:text-gray-900 md:text-4xl ">Something's missing.</p>
            <p className="mb-4 text-lg font-light dark:text-gray-500 ">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
            <Link href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg my-4">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
          ); 
};