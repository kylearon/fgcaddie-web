//reference: https://usehooks-ts.com/react-hook/use-fetch

import { useEffect, useReducer, useRef } from 'react'
import { LOCAL_API, PARAM_API_KEY, RAILWAY_API, ROUTE_COURSES } from '../utils/constants'

interface State<T> {
  data?: T
  error?: Error
}

type Cache<T> = { [url: string]: T }

// discriminated union type
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }

function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
    const cache = useRef<Cache<T>>({})

    // Used to prevent state update if the component is unmounted
    const cancelRequest = useRef<boolean>(false)

    const initialState: State<T> = {
        error: undefined,
        data: undefined,
    }

    // Keep state logic separated
    const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
        switch (action.type) {
        case 'loading':
            return { ...initialState }
        case 'fetched':
            return { ...initialState, data: action.payload }
        case 'error':
            return { ...initialState, error: action.payload }
        default:
            return state
        }
    }

    const [state, dispatch] = useReducer(fetchReducer, initialState)

    useEffect(() => {
        // Do nothing if the url is not given
        if (!url) return;

        cancelRequest.current = false;

        const fetchData = async () => {
            dispatch({ type: 'loading' })

            // If a cache exists for this url, return it
            // if (cache.current[url]) {
            //     dispatch({ type: 'fetched', payload: cache.current[url] })
            //     return
            // }

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = (await response.json()) as T;
                cache.current[url] = data;
                if (cancelRequest.current) return;

                dispatch({ type: 'fetched', payload: data })
            } catch (error) {
                if (cancelRequest.current) return;

                dispatch({ type: 'error', payload: error as Error });
            }
        }

        void fetchData()

        // Use the cleanup function for avoiding a possibly...
        // ...state update after the component was unmounted
        return () => {
            cancelRequest.current = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return state
}

export default useFetch


export interface CourseData {
    guid: string
    name: string
    creator: string
    date_created: string
    holes: HoleData[]
}

export interface HoleData {
    guid: string
    course_id: string
    hole_number: string
    par: number
    length: number
    shots_tee: ShotData[]
}

export interface ShotData {
    guid: string
    type: string
    distance: number
    image_original: string
    image_markedup: string
}

export const useFetchCourses = () => {
    //create the url to fetch
    // const fullUrl = LOCAL_API + ROUTE_COURSES + "/" + "?" + PARAM_API_KEY;
    const fullUrl = RAILWAY_API + ROUTE_COURSES + "/" + "?" + PARAM_API_KEY;
    
    //fetch the data
    const { data, error } = useFetch<CourseData[]>(fullUrl);

    var validData: CourseData[] = [];
    if(data != undefined) {
        validData = data;
    }

    return {coursesData: validData, coursesDataError: error};
}

export const useFetchCoursesByTag = (tag: string) => {
    //create the url to fetch
    // const fullUrl = LOCAL_API + ROUTE_COURSES + "/" + "?" + PARAM_API_KEY;
    const fullUrl = RAILWAY_API + ROUTE_COURSES + "/tag/" + tag + "?" + PARAM_API_KEY;
    
    //fetch the data
    const { data, error } = useFetch<CourseData[]>(fullUrl);

    var validData: CourseData[] = [];
    if(data != undefined) {
        validData = data;
    }

    return {coursesData: validData, coursesDataError: error};
}

export const useFetchCourse = (courseId: string) => {
    //create the url to fetch
    // const fullUrl = LOCAL_API + ROUTE_COURSES + "/" + courseId + "/?" + PARAM_API_KEY;
    const fullUrl = RAILWAY_API + ROUTE_COURSES + "/" + courseId + "/?" + PARAM_API_KEY;
    
    //fetch the data
    const { data, error } = useFetch<CourseData>(fullUrl);

    return {courseData: data, courseDataError: error};
}
