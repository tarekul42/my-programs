// find names form array in object and remove those from all members list;
const allMember=["tarek ","limon ","Sourob "," Naieem","Ismail ","Jahid ","Mujammel ","MAinuddin ","Jakia ","Rabeya "," Athoy","Tonni ","Akib ","Fahim ","Mehedi ","Hasan ","GanjakhorTarek "," Sahadat"];

const tarekShop={
    owner:"tarek",
    worker:["limon","Sourob "]
}

const invitedMembers = () =>{
    const allMemberNameTrimedLowercase = allMember.map(member => member.toLowerCase().trim());
    const tarekWorkersTrimedLowercase = tarekShop.worker.map(worker => worker.toLowerCase().trim());
    const invitedMembers = allMemberNameTrimedLowercase.filter(member => !tarekWorkersTrimedLowercase.includes(member));
    const invitedMembersNameOderly = invitedMembers.map(membersName => membersName.charAt(0).toUpperCase() + membersName.slice(1));
    return invitedMembersNameOderly;

}

invitedMembers();