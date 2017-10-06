import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    const { currentUser } = this.props;

    this.state = {
      email: currentUser.email,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      city_id: currentUser.city_id,
      city_code: currentUser.city_code,
      city_name: currentUser.city_name,
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
    return (e) => this.setState({ [field]: e.currentTarget.value });
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
    userData.append("user[city_code]", this.props.cities[this.state.city_id-1].city_code)
    userData.append("user[city_name]", this.props.cities[this.state.city_id-1].name)
    userData.append("user[image]", this.state.imageFile)

    this.props.updateUser(this.props.currentUser.id, userData)
    .then((updatedUser) => {
      let newID = updatedUser.user.city_id;
      this.props.history.push(`cities/${newID}`);
    });
  }

  render() {
    return (
      <div className="profile-form-container">
        <div className="user-title">
          <h1 className="user-name">Hi {this.props.currentUser.first_name}</h1>
        </div>

        <div className="profile-form-box">
          <form className="profile-form"
            onSubmit={this.handleSubmit}>

          <div className="form-element">
            <div className="profile-photo-form">
              <label>
                <img src={this.state.imageFile}
                     alt="profile pic"
                     className="profile-pic"/>
                <input type="file"
                  onChange={this.handleUserPhoto} />
                Add or Change Your Profile Pic
              </label>
            </div>
          </div>

          <div className="form-element">
            <label className="form-data">
                Update Your Email:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  />
              </label>
            </div>

            <div className="form-element">
              <label className="form-data">
                Update Your Name:
                <input
                  type="text"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                  />
              </label>
            </div>

            <div className="form-element-dropdown">
              <label className="form-data">
                Update Your City:
                <select className="form-city-choice"
                        value={this.state.city_id}
                        onChange={this.update("city_id")}>
                  <option disabled>
                    Update Your Home City
                  </option>
                  {this.props.cities.map(city =>
                  <option key={`${city.id}`}
                          value={city.id}>
                          {city.name}
                  </option>)}
                </select>
              </label>
            </div>
            <button className="button" type="submit">Update Your Profile
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default ProfileForm;
