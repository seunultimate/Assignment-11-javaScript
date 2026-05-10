//Create User Manager
const EventEmiiter = require ('events');

class UserManager extends EventEmiiter{
    constructor(){
        super()
        this.users = [];
    }

    addUser(user){
        this.users.push(user)
        //emit event
        this.emit('userAdded', user);
    }
    updateUser(id, newName){
        const user = this.users.find(u => u.id === id);
        
        if (user) {
        const oldName=user.name;
        user.name = newName;

        this.emit('userUpdated', {
            id, oldName, newName
        });
        }
    }
    removeUser(id){
        const user = this.users.find(u => u.id === id);
        this.users = this.users.filter(u => u.id !== id)
        this.emit('userRemoved', user)
    }
}
const manager = new UserManager();
manager.on('userAdded', (user) =>{
    console.log('User added:', user)
});

manager.on('userUpdated', (data)=>{
    console.log('User updated', data);
})

manager.once('userRemoved', (user) =>{
    console.log('This runs only once');
    console.log('Removed:', user)
})

//Result
manager.addUser({
    id: 2,
    name: 'Gaius'
})
manager.updateUser(2, 'Kemisola');
manager.removeUser(2)
manager.removeUser(2)