import {Component} from 'react'

import './index.css'

const leftArrowImage =
  'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'

const rightArrowImage =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

class ReviewsCarousel extends Component {
  state = {
    reviewNum: 0,
  }

  onClickPreviousReview = () => {
    const {reviewNum} = this.state
    if (reviewNum > 0) {
      this.setState(prevState => ({reviewNum: prevState.reviewNum - 1}))
    }
  }

  onClickNextReview = () => {
    const {reviewNum} = this.state
    const {reviewsList} = this.props

    if (reviewNum < reviewsList.length - 1) {
      this.setState(prevState => ({reviewNum: prevState.reviewNum + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewNum} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[reviewNum]

    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="heading">Reviews</h1>
          <div className="profile-and-buttons-container">
            <button
              type="button"
              data-testid="leftArrow"
              className="arrow"
              onClick={this.onClickPreviousReview}
            >
              <img src={leftArrowImage} alt="left arrow" />
            </button>
            <div className="profile-container">
              <img src={imgUrl} className="profile-image" alt="username" />
              <h1 className="profile-name">{username}</h1>
              <p className="company-name">{companyName}</p>
              <p className="discription">{description}</p>
            </div>
            <button
              type="button"
              data-testid="rightArrow"
              className="arrow"
              onClick={this.onClickNextReview}
            >
              <img src={rightArrowImage} alt="right arrow" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
