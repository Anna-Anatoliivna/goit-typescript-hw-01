type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) : User {
    const defaultUser: User = {
  name: 'Dana',
  surname: 'Wong',
  email: '',
  password: '',
  };

  return { ...defaultUser, ...initialValues };
}

const UpdateUser = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
