var Role;
(function (Role) {
    Role[Role["Super_Admin"] = 0] = "Super_Admin";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Manager"] = 2] = "Manager";
    Role[Role["User"] = 3] = "User";
    Role[Role["Client"] = 4] = "Client";
})(Role || (Role = {}));
console.log('Enum Role : ', Role.Super_Admin);
