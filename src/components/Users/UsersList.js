import classes from "./UsersList.module.css";
import Card from "../UI/Card";
const UsersList = (props) => {
    console.log('list inside component', props)
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={`${user.name}-users-list`}>
              {console.log('user', user)}
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
