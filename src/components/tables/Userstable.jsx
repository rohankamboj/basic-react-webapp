const people = [
    {
      name: 'Anne Rempel',
      title: 'Community Works',
      Team: 'DevOps',
      Status: '33%',
      LastUpdated: '13 Sept 2023',
      UpdatedNotes: 'Lorem ispum dolor sit amet...      1d',
      Aligned: 'Aligned',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Horace Volkman',
        title: 'Community Works',
        Team: 'Product',
        Status: '48%',
        LastUpdated: '13 Sept 2023',
        UpdatedNotes: 'Lorem ispum dolor sit amet...      1d',
        Aligned: 'Aligned',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Desiree Johnston',
        title: 'Community Works',
        Team: 'UX/UI',
        Status: '48%',
        LastUpdated: '13 Sept 2023',
        UpdatedNotes: 'Lorem ispum dolor sit amet...      1d',
        Aligned: 'Aligned',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Janet Turcotte',
        title: 'Community Works',
        Team: 'PMO',
        Status: 'Not Started',
        LastUpdated: '13 Sept 2023',
        UpdatedNotes: 'Lorem ispum dolor sit amet...      1d',
        Aligned: 'Aligned',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Bennie Emmerich',
        title: 'Community Works',
        Team: 'SNOW',
        Status: '100%',
        LastUpdated: '13 Sept 2023',
        UpdatedNotes: 'Lorem ispum dolor sit amet...      1d',
        Aligned: 'Aligned',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Mrs. Elbert Heaney',
        title: 'Community Works',
        Team: 'SysOps',
        Status: '48%',
        LastUpdated: '13 Sept 2023',
        UpdatedNotes: 'Lorem ispum dolor sit amet...      1d',
        Aligned: 'Aligned',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    
    // More people...
  ]
  
  export default function UsersTable() {
    return (
      <div className="">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their title, Owner, Team, Status, Last Updated, Updated Notes, Aligned.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add user
            </button>
          </div>
        </div>
        <div className="mt-8 ">
          <div className="-my-2 overflow-x-scroll w-full">
            <div className="inline-block w-full py-2">
              <table className="w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Owner
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Team
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Last Updated
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Updated Notes
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Aligned
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white p-4">
                  {people.map((person) => (
                    <tr className= 'p-4'>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">{person.title}</div>
                        </td>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{person.name}</div>
                          </div>
                        </div>
                      </td>
                      
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          Active
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.role}</td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }