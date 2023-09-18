import { publishersRepository, CreatePublisher } from "@/repositories";

async function getCreatePublisher(data: CreatePublisher) {
  const getPublisher = await publishersRepository.getPublisherByName(data.name);
  if (getPublisher.length > 0) {
    return getPublisher[0].id;
  }
  const createPublisher = await publishersRepository.create(data);
  return createPublisher.id;
}

export const publisherService = { getCreatePublisher };
