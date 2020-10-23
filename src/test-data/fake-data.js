const testData = {
  users: [
    {
      username: 'testuser1', 
      password: 'testpassword1', 
      first_name: 'testfirstname1', 
      last_name: 'testlastname1', 
      photo_url: null, 
      email: 'test@test1.com'
    }
  ],
  jobs: [
    {
    company_handle: "test-company-a",
    equity: 0.115,
    id: 1,
    salary: 11111,
    state: null,
    title: "Editor, magazine features",
    },
      {
      company_handle: "test-company-b",
      equity: 0.22,
      id: 2,
      salary: 22222,
      state: null,
      title: "Coder",
    },
      {
      company_handle: "test-company-c",
      equity: 0.33,
      id: 3,
      salary: 33333,
      state: null,
      title: "Front-end Dev",
    },
  ],
  companies: [
    {
      description: "Test description 1",
      handle: "test-company-1",
      logo_url: "http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_circle.jpg",
      name: "Test Company 1",
    },
    {
      description: "Test description 2",
      handle: "test-company-2",
      logo_url: "http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_circle.jpg",
      name: "Test Company 2",
    },
    {
      description: "Test description 3",
      handle: "test-company-3",
      logo_url: "http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_circle.jpg",
      name: "Test Company 3",
    },
  ],
}

export { testData }