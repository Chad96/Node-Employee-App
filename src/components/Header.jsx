import React from 'react';

function Header({ setSearchTerms }) {
  return (
    <header>
      <h1>Employee Management</h1>
      <input
        type="text"
        placeholder="Search by name, surname, or ID"
        onChange={(e) => setSearchTerms(e.target.value)}
      />
    </header>
  );
}

export default Header;
