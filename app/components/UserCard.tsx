
interface UserCardProps {
    name : string;
    age : number;
    isPremium : boolean;
}

export default function UserCard ({name,age, isPremium} : UserCardProps){
    return (
        <div className="border p-4 rounded-lg shadow-sm  m-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-500">Age : {age}</p>
            {isPremium && <span className="text-black-500 font-bold "> ⭐Premium Member</span> }
        </div>
    );
}