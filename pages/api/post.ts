import type { NextApiRequest, NextApiResponse } from 'next'
import { PostInterface, NotFoundCommonInterface } from '../../interfaces'
import samplePostData from '../../postData/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';

export type PostResponseInterface = PostInterface | NotFoundCommonInterface

export default (req: NextApiRequest, res: NextApiResponse<PostResponseInterface>) => {
  const { 
    slug 
  } = req.query
  console.log(req.query)
  if(slug === 'step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd')
    return res.status(200).json(samplePostData)
  else 
    res.status(404).json({
      error: 'Post Not Found'
    })
}
