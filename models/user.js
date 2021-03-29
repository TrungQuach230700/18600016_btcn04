const users=[{
    id:1,
    displayName:'TrungQuach',
    email:'18600016@student.hcmus.edu.vn',
    password:'kocopass',
}];

exports.findByEmail=function(email){
    return users.find(u=>u.email===email)
};

exports.findById=function(id){
    return users.find(u=>u.id===id)
};