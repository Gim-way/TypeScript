/*
Запрос

{
  'topicId'
:
  5,
    'status'
:
  'published' // "draft", "deleted"
}
Ответ
[
  {
    'question': 'Как осуществляется доставка?',
    'answer': 'быстро!',
    'tags': [
      'popular',
      'new'
    ],
    'likes': 3,
    'status': 'published'
  }
]
*/
enum QuestionStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted',
}

interface RequestProps {
  topicId: number,
  status?: QuestionStatus
}

interface ResponseProps {
  question: string,
  answer: string,
  tags: string[],
  likes: number,
  status: QuestionStatus

}

const reqData: RequestProps = {
  'topicId': 5,
  'status': QuestionStatus.PUBLISHED
}

async function getFaqs(req: RequestProps): Promise<ResponseProps> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  })
  const data: ResponseProps = await res.json()
  return data
}

const result = getFaqs(reqData)