
import useSWR from 'swr'

export  function useInstructor(limit) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
   /*  console.log("in Hook") */
/*     console.log(limit)
 */    return useSWR(`https://test2.plan-b-eg.com/api/Info/GetAllInstrutors?lang=en&limit=${limit}&page=1`,fetcher);
   
  }