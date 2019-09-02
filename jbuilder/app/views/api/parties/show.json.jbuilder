json.name @party.name

json.guests @party.guests do |guest|
    jsong.name @guest.name
    json.gifts guest.gifts, :title
end