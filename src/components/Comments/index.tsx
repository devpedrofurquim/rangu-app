import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';


interface User {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: string;
      coordinates: {
        latitude: string;
        longitude: string;
      };
      timezone: {
        offset: string;
        description: string;
      };
    };
    email: string;
    login: {
      uuid: string;
      username: string;
      password: string;
      salt: string;
      md5: string;
      sha1: string;
      sha256: string;
    };
    dob: {
      date: string;
      age: number;
    };
    registered: {
      date: string;
      age: number;
    };
    phone: string;
    cell: string;
    id: {
      name: string;
      value: string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  }
  
  interface UserData {
    results: User[];
    info: {
      seed: string;
      results: number;
      page: number;
      version: string;
    };
  }

  const getRandomStars = () => {
    // Generate a random number between 3 and 5
    return Math.floor(Math.random() * (5 - 3 + 1)) + 3;
  };

const Comments = () => {

    const [user, setUser] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const check = localStorage.getItem('users');
    
          if (check) {
            setUser(JSON.parse(check));
          } else {
            const usersData = await getUser();
            localStorage.setItem('users', JSON.stringify(usersData));
            setUser(usersData);
          }
        };
    
        fetchData();
      }, []);
    
      async function getUser() {
        const response = await fetch("https://randomuser.me/api/?results=8");
        const data: UserData = await response.json();
        return data.results;
      }

    return (
        <div>
        <Splide options={{
            perPage: 2,
            arrows: false,
            pagination: false,
            gap: "0rem",
            lazyLoad: 'nearby'
        }}
        >
       {user.map((result) => {
         return (
            <SplideSlide>
            <div className="flex flex-col items-center justify-center text-center my-[40px]">
                            <div className="flex gap-3 ml-[40px]">
                            {[...Array(getRandomStars())].map((_, index) => (
                                <FaStar key={index} className="text-[#FFCC00]" />
                            ))}
                            </div>
                        <div className="flex items-center justify-center place-content-around gap-4">
                            <img src={result.picture.medium} alt={`Picture of ${result.name.title} ${result.name.first} ${result.name.last}`} className="rounded-full"/>
                            <h3 className="text-md font-bold">{`${result.name.title} ${result.name.first} ${result.name.last}`}</h3>
                        </div>
            </div>
            </SplideSlide>)
       })}
        </Splide>
        </div>      
)
}
export default Comments;           