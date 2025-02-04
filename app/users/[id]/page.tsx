import { notFound } from 'next/navigation';
import React from 'react';

const UserDetailPage = ({ params }: { params: any }) => {
  // Directly extract id from params (assuming it’s an object)
  const { id } = params;
  const numericId = parseInt(id, 10);

  if (numericId > 10) {
    notFound();
  }
  
  return (
    <div>Departamento Detail Page {numericId}</div>
  );
};

export default UserDetailPage;
