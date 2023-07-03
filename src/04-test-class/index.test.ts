// Uncomment the code below and write your tests
import { getBankAccount, SynchronizationFailedError, InsufficientFundsError, TransferFailedError } from '.';

describe('BankAccount', () => {
  const bankAccount = getBankAccount(90);
  test('should create account with initial balance', () => {
    expect(bankAccount.getBalance()).toBe(90);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() => bankAccount.withdraw(100)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const newAccount = getBankAccount(10);
    expect(() => bankAccount.transfer(100, newAccount)).toThrow(InsufficientFundsError)
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => bankAccount.transfer(20, bankAccount)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const newAccount = getBankAccount(10);
    const oldBalance = newAccount.getBalance();
    newAccount.deposit(20);
    expect(newAccount.getBalance()).toBeGreaterThan(oldBalance);
  });

  test('should withdraw money', () => {
    const oldBalance = bankAccount.getBalance();
    bankAccount.withdraw(20);
    expect(bankAccount.getBalance()).toBeLessThan(oldBalance);
  });

  test('should transfer money', () => {
    const newAccount = getBankAccount(10);
    bankAccount.transfer(20, newAccount);
    expect(newAccount.getBalance()).toBe(30);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValue(70);
    await expect(bankAccount.fetchBalance()).resolves.toEqual(
      expect.any(Number),
    );
  });

  test('should set new balance if fetchBalance returned number', async () => {
    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValue(70);
    await bankAccount.synchronizeBalance();
    const newBalace = bankAccount.getBalance();
    expect(newBalace).not.toBe(90);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValue(null);
    await expect(bankAccount.fetchBalance()).resolves.toBeNull();
    await expect(() => bankAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
