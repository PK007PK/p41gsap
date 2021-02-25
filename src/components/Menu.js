export default function Menu() {
  return (
    <div className="flex flex-wrap  text-white">
      <div className="container mx-auto">
        <div className="py-2 px-5 bg-gray-900 flex items-center justify-between">
          <div>Logo</div>
          <div>
            <ul className="hidden sm:flex">
              <li className="ml-10">Menu item 1</li>
              <li className="ml-10">Menu item 2</li>
              <li className="ml-10">Menu item 3</li>
            </ul>
            <div className="sm:hidden">Burger</div>
          </div>
        </div>
      </div>
    </div>
  );
}
