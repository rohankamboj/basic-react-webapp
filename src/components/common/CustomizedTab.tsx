function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CustomizedTab({
  button,
  tabs,
  isCurrentTab,
  handleTabChange,
}: {
  button?: React.ReactNode;
  tabs: { name: string; href: string; child: React.ReactNode }[];
  isCurrentTab: (tab: string) => boolean;
  handleTabChange: (tab: string) => void;
}) {
  return (
    <>
      <div className='border-b border-gray-200 '>
        <nav className=' flex justify-between space-x-8' aria-label='Tabs'>
          <div className='-mb-px flex space-x-2 bg-gray-100'>
            {tabs.map((tab) => (
              <div
                key={tab.name}
                onClick={() => handleTabChange(tab.href)}
                className={classNames(
                  isCurrentTab(tab.href)
                    ? ' bg-blue-600 rounded-lg rounded-b-none text-white'
                    : ' text-black ',
                  'whitespace-nowrap border-transparent border-b-4 border-gray-400 py-2 px-6 font-PPRightGrotesk  cursor-pointer text-lg'
                )}
                aria-current={isCurrentTab(tab.href) ? 'page' : undefined}
              >
                {tab.name}
              </div>
            ))}
          </div>
          {button}
        </nav>
      </div>
      {tabs.map(
        (tab) => isCurrentTab(tab.href) && <div key={tab.name}>{tab.child}</div>
      )}
    </>
  );
}
