class TopController < ApplicationController
  def index
    @lists = List.where(user: current_user).order("created_at ASC")
  end

  def create
    @card = Card.new(card_params)
    if @card.save
      respond_to do |format|
        format.html { redirect_to :root }
        format.json { render json: @card}
      end
    else
      render :index
    end
  end
  private
  def card_params
    params.require(:card).permit(:title,:memo,:list_id)
  end
end
