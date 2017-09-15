import React from 'react';
import { Link } from 'react-router';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    const { cities, currentUser } = this.props;

    this.state = {
      email: currentUser.email,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      city_id: currentUser.city_id,
      imageFile: currentUser.image_url,
      imageUrl: '',
    }

    this.handleUserPhoto = this.handleUserPhoto.bind(this);

    this.update = this.update.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleUserPhoto(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    //readAsDataUrl is async
    //use onloadend to instruct
    fileReader.onloadend = function () {
      this.setState({
        imageFile: file,
        imageUrl: fileReader.result
      });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const userData = new FormData();
    userData.append("user[email]", this.state.email)
    userData.append("user[first_name]", this.state.first_name)
    userData.append("user[last_name]", this.state.last_name)
    userData.append("user[city_id]", this.state.city_id)
    userData.append("user[image]", this.state.imageFile)

    this.props.updateUser(this.props.currentUser.id, userData).then((res) => {
      debugger
      let newID = res.user.city_id;
      this.props.history.push(`cities/${newID}`);
    });
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add or Change Your Profile Pic
            <input
              type="file" onChange={this.handleUserPhoto} />
            <img src={this.state.imageUrl}/>
          </label>
          <label>
            Update Your Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              />
          </label>
          <label>
            Update Your Name:
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              />
            <input
              type="text"
              placeholder="Last Name"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              />
          </label>
          <label>
            Update Your City:
            <select
              value={this.state.city_id}
              onChange={this.update("city_id")}>
              <option disabled>
                Update Your Home City
              </option>
              {this.props.cities.map(city =>
              <option
                key={`${city.id}`}
                value={city.id}>
                  {city.name}
              </option>)}
            </select>
          </label>
          <button
            type="submit"
            >Update Your Profile</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm;
