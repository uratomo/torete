class CardController < ApplicationController
  before_action :set_card,only:[:edit,:update,:destroy]

  def edit
    @lists = List.where(user:current_user)
  end

  def update
    if @card.update_attributes(card_params)
      redirect_to :root
    else
      render action: :edit
    end
  end
  def destroy
    @card.destroy
    redirect_to :root
  end
  private
  def card_params
    params.require(:card).permit(:title,:memo,:list_id)
  end

  def set_card
    @card = Card.find_by(id:params[:id])
  end
end
