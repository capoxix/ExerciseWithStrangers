json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :category_id, :user_id, :date_time, :address, :city_id, :num_of_members
      json.joinedCount event.joined_users.count
    end
  end
end

json.users do
  @events.each do |event|
    json.set! event.user.id do
      json.extract! event.user, :name
      json.imgUrl url_for(event.user.photo)
    end
  end
end
