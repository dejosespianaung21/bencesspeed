function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'joses',
    lastName: 'pianaung'
};

const element = (
    <h1>
    Hello, {formatName(user)}!
    </h1>
    
  
);
function Tiga() {
    return (
        element
    );
}

export default Tiga;
