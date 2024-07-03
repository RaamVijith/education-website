import React from 'react';
import Slider from 'react-slick';
import './CourseSlider.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const courses = [
  {
    image: 'https://getmasum.com/html-preview/edumon/assets/img/courses/1.jpg',
    price: '$50.00',
    title: 'Professional Ceramic Moulding for Beginners',
    students: 25,
    lessons: 15,
    duration: '1.5 Hours',
    instructor: 'Masum Billah',
    category: 'JavaScript',
    rating: 5,
    reviews: 21,
  },
  {
    image: 'https://getmasum.com/html-preview/edumon/assets/img/courses/2.jpg',
    price: '$50.00',
    title: 'Basic Fundamentals of Interior & Graphics Design',
    students: 25,
    lessons: 15,
    duration: '1.5 Hours',
    instructor: 'Masum Billah',
    category: 'Laravel',
    rating: 5,
    reviews: 21,
  },
  {
    image: 'https://getmasum.com/html-preview/edumon/assets/img/courses/3.jpg',
    price: '$50.00',
    title: 'WordPress for Beginners – Master WordPress',
    students: 25,
    lessons: 15,
    duration: '1.5 Hours',
    instructor: 'Masum Billah',
    category: 'PHP',
    rating: 5,
    reviews: 21,
  },
  {
    image: 'https://getmasum.com/html-preview/edumon/assets/img/courses/5.jpg',
    price: '$50.00',
    title: 'Basic Fundamentals of Interior & Graphics Design',
    students: 25,
    lessons: 15,
    duration: '1.5 Hours',
    instructor: 'Masum Billah',
    category: 'Laravel',
    rating: 5,
    reviews: 21,
  },
  {
    image: 'https://getmasum.com/html-preview/edumon/assets/img/courses/4.jpg',
    price: '$50.00',
    title: 'WordPress for Beginners – Master WordPress',
    students: 25,
    lessons: 15,
    duration: '1.5 Hours',
    instructor: 'Masum Billah',
    category: 'PHP',
    rating: 5,
    reviews: 21,
  },
];

const CourseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="course-slider-container">
      <h2>Our Courses List</h2>
      <h3>Most Popular Courses</h3>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="course-card-wrapper">
            <div className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-price">{course.price}</div>
              </div>
              <div className="course-details">
                <div className="course-rating">
                  {Array(course.rating).fill().map((_, i) => (
                    <span key={i} className="fa fa-star checked"></span>
                  ))}
                  <span>({course.reviews})</span>
                </div>
                <h4>{course.title}</h4>
                <div className="course-meta">
                  <span><i className="fa fa-user"></i> {course.students} Students</span>
                  <span><i className="fa fa-book"></i> {course.lessons} Lessons</span>
                  <span><i className="fa fa-clock"></i> {course.duration}</span>
                </div>
                <div className="course-instructor">
                  <img src="https://getmasum.com/html-preview/edumon/assets/img/review/1.jpg" alt={course.instructor} />
                  <div>
                    <p>{course.instructor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
