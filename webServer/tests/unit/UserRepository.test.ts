import test, { mock, describe, it, before } from 'node:test';
import assert from 'assert';
import { MockUserRepository } from './MockUserRepository.ts';

const mockUser = {
    id: 1,
    email: 'user@gmail.com',
    password: 'hashed',
    points: 10,
    nickname: 'test_user'
}

const fakeDb = () => ({
    select() {
        return this
    },
    where() {
        return this
    },
    first: async () => mockUser
})

describe('KnexUserRepository.findByEmail test', async () => {
  
    const repo = new MockUserRepository()

    const user = await repo.findByEmail(fakeDb)

    assert.equal(user?.email, 'user@gmail.com')
    assert.equal(user?.password, 'hashed')
})