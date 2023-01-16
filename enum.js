var Role;
(function (Role) {
    Role[Role["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["CLIENT"] = 3] = "CLIENT";
})(Role || (Role = {}));
console.log('Typescript Role : ', Role);
