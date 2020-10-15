# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    subject { FactoryBot.create(:user) }

    it { is_expected.to validate_presence_of(:login) }
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_uniqueness_of(:login) }
  end

  describe 'authenticate' do
    let(:current_user) { create(:user) }

    it 'when error in login' do
      expect { current_user.authenticate(password: '123321') }.to raise_error(ArgumentError)
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
