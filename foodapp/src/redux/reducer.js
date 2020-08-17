import { ADD_TO_CART, REMOVE_FROM_CART, LOG_IN, SIGN_UP,LOGOUT} from './actionTypes.js'
import {saveData,loadData} from './localStorage.js'

const initState = {
    cartItems: [],
    registeredUsers:loadData('users')|| [],
    restaurantArray: [
        {
            name: "The Only Place",
            rating: 4.3,
            Address: "13, Museum Road, Behind Post Office, Bengaluru",
            url: "https://lh3.googleusercontent.com/vkuUei0_ox4nTdd51Z6AZKiJBmIrcIQgaWj_MSOGBs6RN1ASCQ0CqmIws8eX7puNY_pmv6t2y0V-czDEISXEY30uR-M=w1000",
            Menu: [
                {
                    item: "Chicken Biryani",
                    id: 11,
                    price: 300,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                    category: "Non-veg"
                },
                {
                    item: "Paneer Butter Masala.",
                    id: 12,
                    price: 300,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Fresh Corn Soup",
                    id: 13,
                    price: 300,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Dal Makhani",
                    price: 300,
                    id: 14,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                    category: "Non-veg"
                }
            ],
            payment: "card",
            id: 1
        },
        {
            name: "The Fatty Bao",
            rating: 4.2,
            Address: "13, Museum Road, Behind Post Office, Bengaluru",
            url: "https://lh3.googleusercontent.com/Ic7F69PP8FmvR30ruKy9PdWCXrppKxgRpIuETrxljVHS6HnBxZtzmzso3NDC_aamKy1okOprkBYO-cY0qcaRNisMkRQ=w1000",
            Menu: [
                {
                    item: "Chicken Biryani",
                    id: 21,
                    price: 300,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                    category: "Non-veg"
                },
                {
                    item: "Paneer Butter Masala.",
                    price: 300,
                    id: 22,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Fresh Corn Soup",
                    price: 300,
                    id: 23,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Dal Makhani",
                    price: 300,
                    id: 24,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                    category: "Non-veg"
                }
            ],
            payment: "card",
            id: 2
        },
        {
            name: "JW Kitchen",
            rating: 4.3,
            Address: "13, Museum Road, Behind Post Office, Bengaluru",
            url: "https://lh3.googleusercontent.com/T4jvwfJCobV-TfBJVTqnuXaYJE15U9M5g7f1U91nbAtXdz0DzS-Xz25WuJHolXZTvZ4He00Cugu7GOzNFcphfzalMkU=w1000",
            Menu: [
                {
                    item: "Chicken Biryani",
                    price: 300,
                    id: 31,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                    category: "Non-veg"
                },
                {
                    item: "Paneer Butter Masala.",
                    price: 300,
                    id: 32,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Fresh Corn Soup",
                    price: 300,
                    id: 33,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Dal Makhani",
                    price: 300,
                    id: 34,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                    category: "Non-veg"
                }
            ],
            payment: "card",
            id: 3
        },
        {
            name: "Hoot",
            rating: 4.3,
            Address: "13, Museum Road, Behind Post Office, Bengaluru",
            url: "https://lh3.googleusercontent.com/mCK05A2JFmLAJk3r5XmuDhJGvQ355v7ZEo8ePY2ZDJE1Y-O-GKPF3LuPSXbu22mYoodwZNpEpIRS3qndodDFYS-nig=w1000",
            Menu: [
                {
                    item: "Chicken Biryani",
                    price: 300,
                    id: 41,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                    category: "Non-veg"
                },
                {
                    item: "Paneer Butter Masala.",
                    price: 300,
                    id: 42,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Fresh Corn Soup",
                    price: 300,
                    id: 43,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Dal Makhani",
                    price: 300,
                    id: 44,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                    category: "Non-veg"
                }
            ],
            payment: "card",
            id: 4
        },
        {
            name: "The Local",
            rating: 4.3,
            Address: "13, Museum Road, Behind Post Office, Bengaluru",
            url: "https://lh3.googleusercontent.com/6DGQM6mRN93NF0H6eNGvSuTPb_dnAtW7PpNE9A7QIFaBQP9zs-HlREhgelCc_TSZ7BG6fXz0tqlYyQxub20lzGfe-hI=w1000",
            Menu: [
                {
                    item: "Chicken Biryani",
                    price: 300,
                    id: 51,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                    category: "Non-veg"
                },
                {
                    item: "Paneer Butter Masala.",
                    price: 300,
                    id: 52,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Fresh Corn Soup",
                    price: 300,
                    id: 53,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Dal Makhani",
                    price: 300,
                    id: 54,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                    category: "Non-veg"
                }
            ],
            payment: "card",
            id: 5
        },
        {
            name: "Hakuna Matata",
            rating: 4.3,
            Address: "13, Museum Road, Behind Post Office, Bengaluru",
            url: "https://lh3.googleusercontent.com/DisB3OLqBSCOaDKKeGf1YK6azwNqv2rOytXfIgvoSlDPU_VjPZWZYAyVMsKMITTKfIrFf8dRuJWCYKt9R8NTFQhjnLTX=w1000",
            Menu: [
                {
                    item: "Chicken Biryani",
                    price: 300,
                    id: 61,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                    category: "Non-veg"
                },
                {
                    item: "Paneer Butter Masala.",
                    price: 300,
                    id: 62,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Fresh Corn Soup",
                    price: 300,
                    id: 63,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Dal Makhani",
                    price: 300,
                    id: 64,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                    category: "Non-veg"
                }
            ],
            payment: "card",
            id: 6
        },
        {
            name: "Bricklane",
            rating: 4.3,
            Address: "13, Museum Road, Behind Post Office, Bengaluru",
            url: "https://lh3.googleusercontent.com/LWN0iVsho7sC8JS7Y0CWYkh8jbFyAT24F4gyu0z0kfN9VYCWNdwIbd7DQ1iHmgHT-z2Nhho8sJZdNDi5lCgj6dUB9Cw=w1000",
            Menu: [
                {
                    item: "Chicken Biryani",
                    price: 300,
                    id: 71,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                    category: "Non-veg"
                },
                {
                    item: "Paneer Butter Masala.",
                    price: 300,
                    id: 72,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                    "category": "Veg"
                },
                {
                    item: "Fresh Corn Soup",
                    price: 300,
                    id: 73,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Dal Makhani",
                    price: 300,
                    id: 74,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                    category: "Non-veg"
                }
            ],
            payment: "card",
            id: 7
        },
        {
            name: "The Globe Grub",
            rating: 4.3,
            Address: "13, Museum Road, Behind Post Office, Bengaluru",
            url: "https://lh3.googleusercontent.com/hi3vNe1attPpFOYHnimv3uviWbw08cA4iQYfwOfctMVjyCutiE4IHNa3OAIkhnI28NJOgW4_yWdVPieABAH6DmEN3AOv=w1000",
            Menu: [
                {
                    item: "Chicken Biryani",
                    price: 300,
                    id: 81,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                    category: "Non-veg"
                },
                {
                    item: "Paneer Butter Masala.",
                    price: 300,
                    id: 82,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Fresh Corn Soup",
                    price: 300,
                    id: 83,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Dal Makhani",
                    price: 300,
                    id: 84,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                    category: "Non-veg"
                }
            ],
            payment: "card",
            id: 8
        },
        {
            name: "Onesta",
            rating: 4.3,
            Address: "13, Museum Road, Behind Post Office, Bengaluru",
            url: "https://lh3.googleusercontent.com/48NtOIDOJ7vwSwtrsxe9Pbi_L_EYt_aDhbQo8CGkq-IwPy42P7knYF9BB792aP8NkSuqWPk81SDbLeGTgMDpqHOzxHkd=w1000",
            Menu: [
                {
                    item: "Chicken Biryani",
                    price: 300,
                    id: 91,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                    category: "Non-veg"
                },
                {
                    item: "Paneer Butter Masala.",
                    price: 300,
                    id: 92,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Fresh Corn Soup",
                    price: 300,
                    id: 93,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Dal Makhani",
                    price: 300,
                    id: 94,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                    category: "Non-veg"
                }
            ],
            payment: "card",
            id: 9
        },
        {
            name: "The Black Rabbit",
            rating: 4.3,
            Address: "13, Museum Road, Behind Post Office, Bengaluru",
            url: "https://lh3.googleusercontent.com/REVfct6C9fnjnsfIriKr2fIVKfEk5NISc_gvVVCdMbZn6t8B5dcp90QjqolNgtLacegNWZGIlemczmLkF5TxxlbVCjI=w1000",
            Menu: [
                {
                    item: "Chicken Biryani",
                    price: 300,
                    id: 101,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                    category: "Non-veg"
                },
                {
                    item: "Paneer Butter Masala.",
                    price: 300,
                    id: 102,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Fresh Corn Soup",
                    price: 300,
                    id: 103,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                    category: "Veg"
                },
                {
                    item: "Dal Makhani",
                    price: 300,
                    id: 104,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                    category: "Non-veg"
                }
            ],
            payment: "card",
            id: 10
        }
    ],
    userCheck: loadData('userCheck')||false,
    registered:false,
    userExist:loadData('userExist')||false,
    wrongDetails:false,
    presentUser:loadData('presentUser')||false
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            let id = payload.id.toString().split('').map(Number)[0]
            let restaurant = state.restaurantArray.find(item => item.id === id)
            let item = restaurant.Menu.find(item => item.id === payload.id)
            let cartItem = {
                name: item.item,
                price: item.price,
                quantity: 1,
                id: payload.id
            }
            return {
                ...state,
                cartItems: [...state.cartItems, cartItem]
            }
        case REMOVE_FROM_CART:
            return { ...state }
        case LOG_IN:
            let loggedIn = state.registeredUsers.find(user=>user.name == payload.name && user.password == payload.password)
            if(loggedIn!==undefined){
                saveData('userExist',true)
                saveData('presentUser',loggedIn.name)
                return {
                    ...state,
                    userExist:true,
                    presentUser:loggedIn.name
                }
            }   
            return {
                 ...state,
                 userExist:false,
                 wrongDetails:true
                 }
        case SIGN_UP:
            let user = state.registeredUsers.find(item => item.name === payload.name)
            if (user === undefined) {
                let data = [...state.registeredUsers,payload]
                saveData('users',data)
                return {
                    ...state,
                    registeredUsers: data,
                    userCheck:false,
                    registered:true
                }
            }
            return {
                ...state,
                userCheck:true
            }
            case LOGOUT:
                saveData('userExist',false)
                saveData('presentUser',null)
        default:
            return state
    }
}

export default reducer;
