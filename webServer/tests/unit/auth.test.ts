import test, { mock, describe, it, before } from 'node:test';
import assert from 'assert';
import { MockUserRepository } from '../mock/MockUserRepository.ts';
import { MockAuthService } from '../mock/MockAuthService.ts';

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

describe('User auth test suite', async () => {
  
    let repo: MockUserRepository
    let service: MockAuthService

    before(() => {

        repo = new MockUserRepository(fakeDb)
        service = new MockAuthService(repo)
    })

    test('MockUserRepository.findByEmail should find mockUser', async () => {
        const user = await repo.findByEmail()
    
        assert.equal(user.email, mockUser.email)
        assert.equal(user.password, mockUser.password)
        assert.equal(user.points, mockUser.points)
        assert.equal(user.nickname, mockUser.nickname)
    })

    test('MockAuthService.login should return token and user', async () => {

        const result = await service.login({
            email: mockUser.email, 
            password: mockUser.password
        })

        assert.ok(result.token)
        assert.ok(result.user)

        assert.equal(result.user.email, mockUser.email)
    })
})