# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    subject { FactoryBot.create(:user) }

    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_uniqueness_of(:email) }
  end

  describe 'authenticate' do
    let(:current_user) { create(:user) }

    it 'shoulda false' do
      expect(current_user.authenticate(password: '123321')).to be_falsy
    end

    it 'shoulda true' do
      expect(current_user.authenticate(password: '123123')).to be_truthy
    end
  end

  describe 'cryptography_password' do
    let(:current_user) { build(:user, password: '123123') }

    it 'shoulda cryptography_password' do
      expect(current_user.password).to eq('123123')
      current_user.save
      expect(current_user.password).to eq('4297f44b13955235245b2497399d7a93')
    end
  end
end
