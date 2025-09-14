const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search users by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="p-2 border rounded w-full mb-4"
    />
  );
};

export default SearchBar;
