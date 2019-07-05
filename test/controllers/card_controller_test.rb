require 'test_helper'

class CardControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get card_new_url
    assert_response :success
  end

  test "should get create" do
    get card_create_url
    assert_response :success
  end

end
