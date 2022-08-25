const getUser = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const users = await fetch(url).then((res) => res.json());

  console.log(users);

  const tbodyUserTable = document.querySelector(".tbodyUserTable");
  tbodyUserTable.innerHTML = users.map(
    ({ id, name, username, email, address }) => 
    `
    <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${address.street}</td>
    </tr>
    
    `
  );
};

getUser();
