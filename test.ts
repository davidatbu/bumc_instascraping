// THIS WAS A REQUEST
let req1  = async (): Promise<void> => {
    await fetch(
        "https://www.instagram.com/graphql/query/?query_hash=ea4baf885b60cbf664b34ee760397549&variables=" + encodeURIComponent(
            JSON.stringify({
                id: "10206720",
                first: 12,
                after: "QVFCckFQWlFRaHREUENISnpWTzJNU3JHUHVDR2xLVVRYaXdycS1KakVMa2xqMGxmNThLRWU1Skh4WmRUYVlsU1FHY0lFMFpGN0JXSUhSUTFXd0FKLVk3WA==",
            })
        ),
        {
            credentials: "include",
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
                Accept: "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "X-CSRFToken": "1V1HFbTFljzsHzJCLQdYunbRnKvCUXEt",
                "X-IG-App-ID": "936619743392459",
                "X-ASBD-ID": "437806",
                "X-IG-WWW-Claim": "0",
                "X-Requested-With": "XMLHttpRequest",
                "Alt-Used": "www.instagram.com",
            },
            referrer: "https://www.instagram.com/barackobama/",
            method: "GET",
            mode: "cors",
        }
    );
}

// RESPONSE WAS
let resp1 = {
	"data": {
		"user": {
			"edge_owner_to_timeline_media": {
				"count": 523,
				"page_info": {
					"has_next_page": true,
					"end_cursor": "QVFDU1dsZ01ESW1scWZJbVFPN1F6Z05Ddkh3TEpLNUVxWHh6Q0ZON01ZSFFwQ1dNdlJvUGdvSGtOSWJycFd1U1dubHJQOXJpZG8yR0tIY0FKVGJpR3Nydg=="
				},
				"edges": [
					{
						"node": {
							"__typename": "GraphImage",
							"id": "2581466821957088172",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 426,
								"width": 640
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/191376799_526099198564442_8204191482090011253_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q8TNgEsf9PYAX9cns3z&edm=APU89FABAAAA&ccb=7-4&oh=df8aec39653b4abb211495a40e311a52&oe=60E3E328&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/191376799_526099198564442_8204191482090011253_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q8TNgEsf9PYAX9cns3z&edm=APU89FABAAAA&ccb=7-4&oh=df8aec39653b4abb211495a40e311a52&oe=60E3E328&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 426
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/191376799_526099198564442_8204191482090011253_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q8TNgEsf9PYAX9cns3z&edm=APU89FABAAAA&ccb=7-4&oh=df8aec39653b4abb211495a40e311a52&oe=60E3E328&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 500
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/191376799_526099198564442_8204191482090011253_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q8TNgEsf9PYAX9cns3z&edm=APU89FABAAAA&ccb=7-4&oh=df8aec39653b4abb211495a40e311a52&oe=60E3E328&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 720
								}
							],
							"is_video": false,
							"media_preview": "ACocyQmHK4U9fYcVbSJMcqM+1QBv3pbtk/8A16t7lxwck9sj29e3ek07aW/XcLq9m3+mw3y1PZePc0NHGRkDHtzTcSdflP4j/GnHaADuy3fkf5/WnZ3X9IHJJO7fy3KU6BRwMc1Fmp5Tx649KqZpPTf8Bxd1fX57mpBJuHlkFlGTjOP16nn0p8mGIUKqdQOevck56EGqSyMmSOoUfzqNpCQOgwP85oY0WvuPzj06Z59ac7F25RSMYBHH44yMn606IBoWcjJQjH4+vr+NVH5+Y9STR5g7kkkfPzDA6YB/L7pqHZGPX8xVhlDRc9hWdk0Af//Z",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTgxNDY2ODIxOTU3MDg4MTcyIn0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "George Floyd was murdered one year ago today. Since then, hundreds more Americans have died in encounters with police—parents, sons, daughters, friends taken from us far too soon. But the last year has also given us reasons to hope.\n\nToday, more people in more places are seeing the world more clearly than they did a year ago. It’s a tribute to all those who decided that this time would be different—and that they, in their own ways, would help make it different. \n\nWhen injustice runs deep, progress takes time. But if we can turn words into action and action into meaningful reform, we will, in the words of James Baldwin, “cease fleeing from reality and begin to change it.”"
										}
									}
								]
							},
							"shortcode": "CPTNmW6NXOs",
							"edge_media_to_comment": {
								"count": 4306,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1621954847,
							"edge_media_preview_like": {
								"count": 583063,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c99.0.396.396a/191376799_526099198564442_8204191482090011253_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q8TNgEsf9PYAX9cns3z&edm=APU89FABAAAA&ccb=7-4&oh=b326d862212dc18383f673ce0c7f361d&oe=60E44CFD&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c99.0.396.396a/s150x150/191376799_526099198564442_8204191482090011253_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q8TNgEsf9PYAX9cns3z&edm=APU89FABAAAA&ccb=7-4&oh=1b4a513d63d2d8022f6177671d7626bd&oe=60E33150&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c99.0.396.396a/s240x240/191376799_526099198564442_8204191482090011253_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q8TNgEsf9PYAX9cns3z&edm=APU89FABAAAA&ccb=7-4&oh=790261f935f1d614b5756051b15514a2&oe=60E3634A&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c99.0.396.396a/s320x320/191376799_526099198564442_8204191482090011253_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q8TNgEsf9PYAX9cns3z&edm=APU89FABAAAA&ccb=7-4&oh=1f69f08faccad095915f562e76f596f2&oe=60E3D0B8&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c99.0.396.396a/191376799_526099198564442_8204191482090011253_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q8TNgEsf9PYAX9cns3z&edm=APU89FABAAAA&ccb=7-4&oh=b326d862212dc18383f673ce0c7f361d&oe=60E44CFD&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c99.0.396.396a/191376799_526099198564442_8204191482090011253_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Q8TNgEsf9PYAX9cns3z&edm=APU89FABAAAA&ccb=7-4&oh=b326d862212dc18383f673ce0c7f361d&oe=60E44CFD&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": []
						}
					},
					{
						"node": {
							"__typename": "GraphSidecar",
							"id": "2575728775898873561",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1080,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=be30dcb05acec4d7228754a1f5c590da&oe=60E36113&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=6f89071cc84ece721da0c72cf657934d&oe=60E48217&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=087d89a92e33b4aa1fd118405347be9e&oe=60E32AD3&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 750
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=be30dcb05acec4d7228754a1f5c590da&oe=60E36113&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1080
								}
							],
							"is_video": false,
							"media_preview": null,
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTc1NzI4Nzc1ODk4ODczNTYxIn0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "America has always been a work in progress, but each of us has the power to shape this country’s course.\n \nThis month marks 60 years since young people, including John Lewis, did just that—setting out on two buses from Washington, DC to the South to test the enforcement of Supreme Court rulings on segregation.\n \nTo mark the anniversary of the Freedom Rides, the @ObamaFoundation spoke with three brave riders—Joan Trumpauer Mulholland, Catherine Burks-Brooks, and Luvaghn Brown—who reflected on the moment and what it meant to the broader Civil Rights Movement. \n \nI hope you’ll take a few minutes to listen to their story at Obama.org."
										}
									}
								]
							},
							"shortcode": "CO-06zFND7Z",
							"edge_media_to_comment": {
								"count": 2639,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1621270819,
							"edge_media_preview_like": {
								"count": 281870,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=6f89071cc84ece721da0c72cf657934d&oe=60E48217&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=5d0310de50172ef40d1259ff8858a22f&oe=60E401D4&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=7022e3f161cb2a8df664f217a98ed94d&oe=60E47C56&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=2130aa4d200f9f2acd9065cf589d13e4&oe=60E3272C&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=e23074668b05ecc0e90368162ee6e946&oe=60E45F2D&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=6f89071cc84ece721da0c72cf657934d&oe=60E48217&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": [],
							"edge_sidecar_to_children": {
								"edges": [
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2575728770093970790",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1080,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=be30dcb05acec4d7228754a1f5c590da&oe=60E36113&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=6f89071cc84ece721da0c72cf657934d&oe=60E48217&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 640
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=087d89a92e33b4aa1fd118405347be9e&oe=60E32AD3&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 750
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/187555841_817621445849367_4632397145043259539_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jBC_829-Pa8AX8TkDo0&edm=APU89FABAAAA&ccb=7-4&oh=be30dcb05acec4d7228754a1f5c590da&oe=60E36113&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1080
												}
											],
											"is_video": false,
											"media_preview": "ACoq2Lu5+zRGTG48AD3PSqkGpNIzRyJ5bqhcA98Cl1OVRsiIyXYYPQAjnPv9PSqRliSQlzh3QouORz6kdz0HoPrQA6TULkb2Xy9qHByOfwGeat6ZeyXe/wAzbhduMDHXPufSsucu28RZwxyDg8/w4HHX1z9RWjpEfl7wAVHyDnvwc49ee44oA1TntS5p2KTFAGVd6b9pmEpk24GNuM+vPX+lVpdNRnC+aoxglSOfXPXuOKeF5MgHzmbbuPoDjAP93b27mllkIuGHZcH25Az/AJ+lAF61jSMv5bBskbgMcenT2qtDPI9wUJyo3ZHoB0P59eec1Nakb5CB82ELehODjH4Uy2VvOLmPZv6n/PqaAMZQWDbiSQP7xH/66p4PqfzNSyLK7sNrBQSMAHnBPJ4qEwTf3H/75P8AhQButbXZPygBA+4AkdM59M5x6+9aHkBsl1Oc8EdRwB6+3vV2loArxxhSSF2lsZJxk4z1we1BLjtn8Ov61PSUARBpCfQfT/69S5opKAP/2Q==",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTc1NzI4NzcwMDkzOTcwNzkwIn0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2575728770110914771",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1080,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/188132019_761213551244156_709914785845090754_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=rKkor6s-8G0AX8trQKf&edm=APU89FABAAAA&ccb=7-4&oh=7b766f6fc20ae6b24adc30d91cb3a4b2&oe=60E3CE7A&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/188132019_761213551244156_709914785845090754_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=rKkor6s-8G0AX8trQKf&edm=APU89FABAAAA&ccb=7-4&oh=97e4a9ef377a4ede363d80dd1b5cd472&oe=60E3E29D&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 640
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/188132019_761213551244156_709914785845090754_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=rKkor6s-8G0AX8trQKf&edm=APU89FABAAAA&ccb=7-4&oh=1cbf91b609a8f3b7db268aeb565254f8&oe=60E33D5D&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 750
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/188132019_761213551244156_709914785845090754_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=rKkor6s-8G0AX8trQKf&edm=APU89FABAAAA&ccb=7-4&oh=7b766f6fc20ae6b24adc30d91cb3a4b2&oe=60E3CE7A&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1080
												}
											],
											"is_video": false,
											"media_preview": "ACoq6ByQOKrvIUUsSQFGTz2qw/Ss2/OIHHqMfmRQBnvrmGwqll9ScZ+g5x+NaVtdrdLuQng4IPUH/D0NZMCwiP5lBYf7OevpUulYWSQeoGPwJ/xoA6CLpUlMj6U+gBr9KoXKh1Kt/EP/ANX61oN0qhLhR6cjk/UUAYqzkjtkAD8Qav2GHDStjcxxx2A/xNRXlpArB1dUDNgjOevcY7fXgetWE8lHEcbAjbjg5yQck8d+SaANWPpT6iiGBUtADX6Vi6qMRq3XDVsv0H1qpcqGTBAIz3oAwFiDgr8vUkEBjkg44wcf/rpIJSbhQcfKxGRnn8ya0NRjWO3ygCnK8gAHv6VqCJAMhQDgdh6UATx9KfTEp9AH/9k=",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTc1NzI4NzcwMTEwOTE0NzcxIn0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									}
								]
							}
						}
					},
					{
						"node": {
							"__typename": "GraphVideo",
							"id": "2573635310361533119",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 750,
								"width": 750
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/185441566_1406934776323327_6607053249276864638_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=COvW7qKZvH4AX_LOtRg&edm=APU89FABAAAA&ccb=7-4&oh=dd6ad0025216e50e1e7424d4092f57b8&oe=60DF0611&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/185441566_1406934776323327_6607053249276864638_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=COvW7qKZvH4AX_LOtRg&edm=APU89FABAAAA&ccb=7-4&oh=a781d6d5ae587eac54716de22f97c493&oe=60DEEC0A&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/185441566_1406934776323327_6607053249276864638_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=COvW7qKZvH4AX_LOtRg&edm=APU89FABAAAA&ccb=7-4&oh=dd6ad0025216e50e1e7424d4092f57b8&oe=60DF0611&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 750
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/185441566_1406934776323327_6607053249276864638_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=COvW7qKZvH4AX_LOtRg&edm=APU89FABAAAA&ccb=7-4&oh=dd6ad0025216e50e1e7424d4092f57b8&oe=60DF0611&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1080
								}
							],
							"is_video": true,
							"media_preview": "ACoq2BGPSnCNfSngU8CgZUkeOM4OM+5xU6xowBA4NZd6wVyAc+vfH+yfwrVgQogGc+/1549qQ7CCJcdKYYR61YXpURHNMQoNYOpX7+YYY22qowcdSe/Pp2rSku5Is7QCF9+uf1471ytzlZG3dTg/nyf1poQnnsoZB0PT2Pc/iOP1q1Z6jLakDO6P+6T/AC9P5e1Zu6nIvmMq+ppgd75gG0Hq3T+dMZuTWL5wZkyTtCqOvTHXP+NW2vI8nmpGZs8ucqRtzgbujYHcg9azZJAG3Nkt2YccDgZBBpbxj55GeOP5CqsvWgfS5P56jsf/AB3/AOJoWUM4Kg7+AORj09Krdqkt/wDWr/vD+dBJuxR4ASUAsc85IwPQdjj+dRmS4HARMD/PrVlj8y/j/KmnrQM//9k=",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTczNjM1MzEwMzYxNTMzMTE5In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"dash_info": {
								"is_dash_eligible": false,
								"video_dash_manifest": null,
								"number_of_qualities": 0
							},
							"has_audio": true,
							"video_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t50.2886-16/185807697_151207376971271_8195365594897404922_n.mp4?_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=eP3OvprrzVoAX8wC7bT&edm=APU89FABAAAA&ccb=7-4&oe=60DED0D7&oh=fbbd68d97a9523715a79f1e43c4be430&_nc_sid=86f79a",
							"video_view_count": 2481390,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "The other day I had a chance to visit a COVID-19 vaccination site in Greenbelt, MD. It was great to see so many folks getting their shot. If you need one, sign up today at vaccines.gov. No matter where you live there is a vaccination site near you. And then help us spread the word so we can keep our families and communities safe and get back to all the things we love."
										}
									}
								]
							},
							"shortcode": "CO3Y63XgFq_",
							"edge_media_to_comment": {
								"count": 5344,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1621021360,
							"edge_media_preview_like": {
								"count": 357996,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/185441566_1406934776323327_6607053249276864638_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=COvW7qKZvH4AX_LOtRg&edm=APU89FABAAAA&ccb=7-4&oh=a781d6d5ae587eac54716de22f97c493&oe=60DEEC0A&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/185441566_1406934776323327_6607053249276864638_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=COvW7qKZvH4AX_LOtRg&edm=APU89FABAAAA&ccb=7-4&oh=f278224264ccbf96715637ab47b1a5b2&oe=60DEC07D&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/185441566_1406934776323327_6607053249276864638_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=COvW7qKZvH4AX_LOtRg&edm=APU89FABAAAA&ccb=7-4&oh=5acb5da245505f72886a8f4c313b8ed3&oe=60DF5735&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/185441566_1406934776323327_6607053249276864638_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=COvW7qKZvH4AX_LOtRg&edm=APU89FABAAAA&ccb=7-4&oh=2ecec47c45e928cdd03a1f4a7438e012&oe=60DEF7EC&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/185441566_1406934776323327_6607053249276864638_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=COvW7qKZvH4AX_LOtRg&edm=APU89FABAAAA&ccb=7-4&oh=38738924f8876fd5c8c206c212a54f8b&oe=60DF21AA&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/185441566_1406934776323327_6607053249276864638_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=COvW7qKZvH4AX_LOtRg&edm=APU89FABAAAA&ccb=7-4&oh=a781d6d5ae587eac54716de22f97c493&oe=60DEEC0A&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": [],
							"product_type": "feed"
						}
					},
					{
						"node": {
							"__typename": "GraphImage",
							"id": "2569887141940540614",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1349,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/183244123_1352822025117251_3138461254051457868_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DbPyMZWkITYAX99sUIk&edm=APU89FABAAAA&ccb=7-4&oh=3a62e291c20bcf4f8a650df8083f0d29&oe=60E37177&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/183244123_1352822025117251_3138461254051457868_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DbPyMZWkITYAX99sUIk&edm=APU89FABAAAA&ccb=7-4&oh=451daa1d00a15ef4fd12b2584fd0af85&oe=60E3FEFB&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 799
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/183244123_1352822025117251_3138461254051457868_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DbPyMZWkITYAX99sUIk&edm=APU89FABAAAA&ccb=7-4&oh=43c81585cb89e0868a3df50918240567&oe=60E46E84&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 937
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/183244123_1352822025117251_3138461254051457868_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DbPyMZWkITYAX99sUIk&edm=APU89FABAAAA&ccb=7-4&oh=3a62e291c20bcf4f8a650df8083f0d29&oe=60E37177&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1349
								}
							],
							"is_video": false,
							"media_preview": "ACEqrGyZMZxk+/8A9amCPAbOMgr/AFzUv2wiMvjLnp7VHEW8l2yGY4IHtnn8s5qGux0Rm7q7dhI03nAHSrNquLiP6n/0E1nwzSh9pOPUdq04P9fGf9o/yNO3U05+ZSXkbfkr6UVLRVHGceZBGN2xfbr1ognAHP3uQR2we4/lSXUTbPukEfN1BGPwNUYCN4J6c/ypKxrN2fu6IttGSwYcY/pWnasJHjYdVcZ/EHBH+eKoLIAvzcEZq7p6kAt/dKn9TQK7WvfR/M1/tNFZeDRSuTYqzFZATvHTgZHp+FYdPH+NMppWHJ3sTwuysCOcdq2bK43OIwBhjkk9eKyI+30q7Zf678DTsTd2NjavqPzFFZu0egoqDSx//9k=",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTY5ODg3MTQxOTQwNTQwNjE0In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": [
									{
										"node": {
											"user": {
												"full_name": "Michelle Obama",
												"id": "4302013048",
												"is_verified": true,
												"profile_pic_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/156746311_250879043355368_3932649827440256743_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_ohc=thwJwZKBc7kAX8uvrBG&edm=APU89FABAAAA&ccb=7-4&oh=e59192d916330866ad250dd432ce3608&oe=60E4347D&_nc_sid=86f79a",
												"username": "michelleobama"
											},
											"x": 0.6256038647000001,
											"y": 0.5519323671
										}
									}
								]
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "On this Mother’s Day, I want to thank Michelle for being such an incredible mom to our girls. And I hope you’ll take a moment to thank the women in your life who love you in that special way that mothers do: biological moms, adoptive moms, and foster moms; single moms, grandmoms and godmothers; aunts and mentors—all the people who come to mind when you think about Mother’s Day. Or take a moment, like I will, to remember the moms who raised and sustained us, and who we miss every day—no matter how long it’s been. All of these amazing people deserve our gratitude, today and every day."
										}
									}
								]
							},
							"shortcode": "COqEr1gNbTG",
							"edge_media_to_comment": {
								"count": 22470,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1620574442,
							"edge_media_preview_like": {
								"count": 2105759,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.162.1298.1298a/s640x640/183244123_1352822025117251_3138461254051457868_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DbPyMZWkITYAX99sUIk&edm=APU89FABAAAA&ccb=7-4&oh=ec2306330cf03be25837a31e84e0d0ea&oe=60E49649&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.162.1298.1298a/s150x150/183244123_1352822025117251_3138461254051457868_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DbPyMZWkITYAX99sUIk&edm=APU89FABAAAA&ccb=7-4&oh=f03f11372c5323c34b4f181ba9e031cc&oe=60E44868&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.162.1298.1298a/s240x240/183244123_1352822025117251_3138461254051457868_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DbPyMZWkITYAX99sUIk&edm=APU89FABAAAA&ccb=7-4&oh=e3d1d96b36c8aeeff1f1081c5ef80cf9&oe=60E31530&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.162.1298.1298a/s320x320/183244123_1352822025117251_3138461254051457868_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DbPyMZWkITYAX99sUIk&edm=APU89FABAAAA&ccb=7-4&oh=e75d5ffab3853bbcdec44c7178b3e6e3&oe=60E49871&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.162.1298.1298a/s480x480/183244123_1352822025117251_3138461254051457868_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DbPyMZWkITYAX99sUIk&edm=APU89FABAAAA&ccb=7-4&oh=49a45a1e70a36ce5c85ea3866860efca&oe=60E3D733&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.162.1298.1298a/s640x640/183244123_1352822025117251_3138461254051457868_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DbPyMZWkITYAX99sUIk&edm=APU89FABAAAA&ccb=7-4&oh=ec2306330cf03be25837a31e84e0d0ea&oe=60E49649&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": []
						}
					},
					{
						"node": {
							"__typename": "GraphSidecar",
							"id": "2569267975747408413",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 837,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=18953ca1c3d8fe3ac409d7d1b44ae235&oe=60E37186&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=325bab166a9925ec931a694938096dc2&oe=60E38342&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 496
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=79547aa2ac61553cd52d8cf32e458dd0&oe=60E2D346&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 581
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=18953ca1c3d8fe3ac409d7d1b44ae235&oe=60E37186&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 837
								}
							],
							"is_video": false,
							"media_preview": null,
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTY5MjY3OTc1NzQ3NDA4NDEzIn0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Today our family lost a true friend and loyal companion. For more than a decade, Bo was a constant, gentle presence in our lives—happy to see us on our good days, our bad days, and everyday in between. He tolerated all the fuss that came with being in the White House, had a big bark but no bite, loved to jump in the pool in the summer, was unflappable with children, lived for scraps around the dinner table, and had great hair. He was exactly what we needed and more than we ever expected. We will miss him dearly."
										}
									}
								]
							},
							"shortcode": "COn35yDNhId",
							"edge_media_to_comment": {
								"count": 87403,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1620500631,
							"edge_media_preview_like": {
								"count": 4315507,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c162.0.1116.1116a/s640x640/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=f73d709d707c7f100bc75f5e5422210a&oe=60E40BC6&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c162.0.1116.1116a/s150x150/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=90595807f3fba91791ee368d7f9e84df&oe=60E41936&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c162.0.1116.1116a/s240x240/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=ac1b589c808d5f2118f678f6f0d83f9e&oe=60E2B7B4&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c162.0.1116.1116a/s320x320/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=58ec9efaa614ff2a703d6f2add64ac67&oe=60E47A4E&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c162.0.1116.1116a/s480x480/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=ab9c13fd7fb97f8b12ebf3d47de46417&oe=60E3C48B&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c162.0.1116.1116a/s640x640/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=f73d709d707c7f100bc75f5e5422210a&oe=60E40BC6&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": [],
							"edge_sidecar_to_children": {
								"edges": [
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2569267970823421868",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 837,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=18953ca1c3d8fe3ac409d7d1b44ae235&oe=60E37186&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=325bab166a9925ec931a694938096dc2&oe=60E38342&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 496
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=79547aa2ac61553cd52d8cf32e458dd0&oe=60E2D346&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 581
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/183219315_291913085993731_3866653588238588173_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DQSYVZmG2cAAX96UDDI&edm=APU89FABAAAA&ccb=7-4&oh=18953ca1c3d8fe3ac409d7d1b44ae235&oe=60E37186&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 837
												}
											],
											"is_video": false,
											"media_preview": "ACogu5/p/wCg1Ko+Vj6D/Gox/wDE/wAqlB+RvZf8aQzJluCgCkbgec9SPx9O+K0lA2gngfnWDdPnlTk47HpnOavaSHdHySVyAuc9e+D/AEpJDbLEs5G0rwGBPvxxSQjMan/ZH8qjl4CZ7K2fzqaAfu1/3R/IVRJA0xJwPmPoOBx6kVOIeCzOwwDwDgY56jv/AFqOGIJVsNwfp/jSKMQSLOrbRhRx+melXtPixCrKzKdzcZ+UkHHT371DGoVMAYGf5/5x9KtwuPLUDjGR+tJMbRPMgnHmLyRxt/mD6EU2FSsag8EKAfyoSXY/+zJ+jf8A16mJqzM//9k=",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTY5MjY3OTcwODIzNDIxODY4In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2569267970831706274",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 837,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/183240671_174424071242293_2038703480302707561_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=-FOBx8a7KsgAX_XN8E4&edm=APU89FABAAAA&ccb=7-4&oh=cb91e454c967e58fc9c527d25269bd11&oe=60E425D1&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/183240671_174424071242293_2038703480302707561_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=-FOBx8a7KsgAX_XN8E4&edm=APU89FABAAAA&ccb=7-4&oh=969eb9c553df80787820b89974c7746f&oe=60E398D5&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 496
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/183240671_174424071242293_2038703480302707561_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=-FOBx8a7KsgAX_XN8E4&edm=APU89FABAAAA&ccb=7-4&oh=ab676baf6688b67da29e2ebeb9c60224&oe=60E2DA11&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 581
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/183240671_174424071242293_2038703480302707561_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=-FOBx8a7KsgAX_XN8E4&edm=APU89FABAAAA&ccb=7-4&oh=cb91e454c967e58fc9c527d25269bd11&oe=60E425D1&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 837
												}
											],
											"is_video": false,
											"media_preview": "ACogzpb5rwruADKMAKDgj6djWm1yi243sQ6jPA6/3eT/ADrMscRuJOgXqeMc8Dr61pO8XmbCCFP3gV445wp64zye3pxU+ZduhItskyi4DEbgCegO4dT/AIfzpb+7aHgDcr8n3HQgfof/ANdUJGMa7Q+Fwc+p9MAenUmswM8hOSWOMDJz74oWoi6rb0UgYHP/AKEaXbUMJKqoz1GcfU8fnzVjePegZlBSQfpXTR3KQqnmZY7QVYfTpn1xVVtIDLhHOf8Aa6fpzVa4juVjWFkJWPoy5OfTkdvaqEMuriF1PkpsOeSfvZ9OSeO/4VWAKsrjoenr9PWopWOApzx681uvOjxJIcFgVPA4z3z6DsaQeQkcC/ZhJ1YqoPoApI/AjuKq7gOM9KuSS+bgEYQckZ+8ewPsOp9T7U3KelG4XS3P/9k=",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTY5MjY3OTcwODMxNzA2Mjc0In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2569267970840072859",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 840,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/183622926_244566240798581_695770094605120290_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DSBJK-D6ZFEAX_wfgO3&edm=APU89FABAAAA&ccb=7-4&oh=cea491958593e7816992940debb8016c&oe=60E3D204&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/183622926_244566240798581_695770094605120290_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DSBJK-D6ZFEAX_wfgO3&edm=APU89FABAAAA&ccb=7-4&oh=7413aaf2ddbbeab529aaf871d6d79f1c&oe=60E30C35&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 497
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/183622926_244566240798581_695770094605120290_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DSBJK-D6ZFEAX_wfgO3&edm=APU89FABAAAA&ccb=7-4&oh=2977b899e4a2e0792bf415f904d23636&oe=60E417F5&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 583
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/183622926_244566240798581_695770094605120290_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DSBJK-D6ZFEAX_wfgO3&edm=APU89FABAAAA&ccb=7-4&oh=cea491958593e7816992940debb8016c&oe=60E3D204&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 840
												}
											],
											"is_video": false,
											"media_preview": "ACogyVk2c+vTNNlmaQ7mbP15/wAioXakRA7ZPTvTAkjkP+f85Fb+m32/ELdexz+n+FYUcKuDwQewHWp7VALiMcn5hznI+tAHVSHaN/8Ad6/TvUg55FBqt5BHRiB2HFAHEGp45CFIFV6AcUhmlARjeARt7kj5vYCkjnWKZZQOFOcZ9f8AJp9hbtNxjav949/p2NbTaXG64QcjJ3E8knvj27A8UuozQVw6hh0IyKdWVbztBIIJcBW+4e305/z6VrVZB//Z",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTY5MjY3OTcwODQwMDcyODU5In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									}
								]
							}
						}
					},
					{
						"node": {
							"__typename": "GraphSidecar",
							"id": "2567801642262391451",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 771,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=9c23777a7f5c0afbb7ddcfef279de611&oe=60E45669&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=07f94b1f9acbebf0726e769db656a2e6&oe=60E316ED&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 456
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=7349436f9987ae780f51dd2ef0c38351&oe=60E46EA9&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 535
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=9c23777a7f5c0afbb7ddcfef279de611&oe=60E45669&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 771
								}
							],
							"is_video": false,
							"media_preview": null,
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTY3ODAxNjQyMjYyMzkxNDUxIn0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": [
									{
										"node": {
											"user": {
												"full_name": "Obama Foundation",
												"id": "1682238760",
												"is_verified": true,
												"profile_pic_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82232429_1178388959026766_1341515975295500288_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_ohc=183TFIvc4sEAX8RD4_f&edm=APU89FABAAAA&ccb=7-4&oh=7d1655bd8fbb07d0192f6b39871ea67f&oe=60E2A7CA&_nc_sid=86f79a",
												"username": "obamafoundation"
											},
											"x": 0.9027777778,
											"y": 0.9823671498000001
										}
									},
									{
										"node": {
											"user": {
												"full_name": "Chicago Women in Trades",
												"id": "6438297221",
												"is_verified": false,
												"profile_pic_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/23596364_145375736106420_5430812453019582464_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_ohc=M5A4DAn0kQIAX9aYVlO&edm=APU89FABAAAA&ccb=7-4&oh=f7085902caa7b3650960efe850444049&oe=60E2CBE0&_nc_sid=86f79a",
												"username": "chicagowomenintrades"
											},
											"x": 0.9346405193,
											"y": 0.9823671498000001
										}
									}
								]
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "As a child, Zahrah Hill spent hours watching her mother Renee attend trainings hosted by Chicago Women in Trades (CWIT) to become an electrician. Years later, inspired by her mother, Zahrah completed the same training program, and is now raising kids of her own.\n \nAs we get ready to break ground on the Obama Presidential Center this fall, we’re proud to work with community organizations that are training talented, hardworking people like Zahrah and Renee on the South and West Sides of Chicago. This Mother’s Day, take a minute to hear their stories and learn how trades are strengthening our communities."
										}
									}
								]
							},
							"shortcode": "COiqf0ktuqb",
							"edge_media_to_comment": {
								"count": 1458,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1620325831,
							"edge_media_preview_like": {
								"count": 269021,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c206.0.1028.1028a/s640x640/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=6029d5568dd166365d641c5c2c487610&oe=60E31C35&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c206.0.1028.1028a/s150x150/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=31ba4c9110649f81ac7949161b7ed95f&oe=60E2B545&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c206.0.1028.1028a/s240x240/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=54780b19cabc0c5fd3859eecf0301baf&oe=60E305C3&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c206.0.1028.1028a/s320x320/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=cacdac1733255ef2784d134b147481b4&oe=60E2AABD&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c206.0.1028.1028a/s480x480/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=54b210775fa79c7ded7cf8fc196c0e44&oe=60E2BC3C&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c206.0.1028.1028a/s640x640/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=6029d5568dd166365d641c5c2c487610&oe=60E31C35&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": [],
							"edge_sidecar_to_children": {
								"edges": [
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2567801638764233257",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 771,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=9c23777a7f5c0afbb7ddcfef279de611&oe=60E45669&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=07f94b1f9acbebf0726e769db656a2e6&oe=60E316ED&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 456
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=7349436f9987ae780f51dd2ef0c38351&oe=60E46EA9&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 535
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/182075552_181428363849252_6791074880287986699_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MAvLPJIl5M0AX-rVo1I&edm=APU89FABAAAA&ccb=7-4&oh=9c23777a7f5c0afbb7ddcfef279de611&oe=60E45669&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 771
												}
											],
											"is_video": false,
											"media_preview": "ACod2o+tWXbaCeuKqR9adJKCNn8RHFAFa/u5IlHlDBPOeMe/FOtit0d8gBOxe3fLZxmoriLzkGDgr0J6Ef56VYikAbPA+VRj6Z6e3NQppuyYaE/2WH+6KPskP90UE0/JqwKy8ZPtVMSSXDfu+IlBGT/F7D296bHYmVcl2HXoAP6Y/MGmFGjYEsWG8KQQvI57gDFJq/oMnniBQDkADGKqRHyHUclWYgexI/rTp7vy2Me3IXpg468+hqjHcNPIv8IDg4/HHX8fasVFp+Sd/wDIlbnQNKAM9/TH9aN30/M0MnlPnOcg/wA6djPPr7Ctiz//2Q==",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTY3ODAxNjM4NzY0MjMzMjU3In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": [
													{
														"node": {
															"user": {
																"full_name": "Obama Foundation",
																"id": "1682238760",
																"is_verified": true,
																"profile_pic_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82232429_1178388959026766_1341515975295500288_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_ohc=183TFIvc4sEAX8RD4_f&edm=APU89FABAAAA&ccb=7-4&oh=7d1655bd8fbb07d0192f6b39871ea67f&oe=60E2A7CA&_nc_sid=86f79a",
																"username": "obamafoundation"
															},
															"x": 0.9027777778,
															"y": 0.9823671498000001
														}
													},
													{
														"node": {
															"user": {
																"full_name": "Chicago Women in Trades",
																"id": "6438297221",
																"is_verified": false,
																"profile_pic_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/23596364_145375736106420_5430812453019582464_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_ohc=M5A4DAn0kQIAX9aYVlO&edm=APU89FABAAAA&ccb=7-4&oh=f7085902caa7b3650960efe850444049&oe=60E2CBE0&_nc_sid=86f79a",
																"username": "chicagowomenintrades"
															},
															"x": 0.9346405193,
															"y": 0.9823671498000001
														}
													}
												]
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2567801638714014964",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 771,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/182278695_857107908489960_8843218819623192348_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=RINS7iGBVPsAX-smmb6&edm=APU89FABAAAA&ccb=7-4&oh=55518c88ebb7b8a4ef6a69c5fe9253aa&oe=60E481D5&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/182278695_857107908489960_8843218819623192348_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=RINS7iGBVPsAX-smmb6&edm=APU89FABAAAA&ccb=7-4&oh=e4e42310f77ce151c20fe95fefbec851&oe=60E31491&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 457
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/182278695_857107908489960_8843218819623192348_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=RINS7iGBVPsAX-smmb6&edm=APU89FABAAAA&ccb=7-4&oh=eef1ca78c349c75a908eb60ed612ae27&oe=60E3B355&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 535
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/182278695_857107908489960_8843218819623192348_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=RINS7iGBVPsAX-smmb6&edm=APU89FABAAAA&ccb=7-4&oh=55518c88ebb7b8a4ef6a69c5fe9253aa&oe=60E481D5&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 771
												}
											],
											"is_video": false,
											"media_preview": "ACoeyI1z07VowoQAfWooYNuHO7bnnHPT6c/5xVwywoUHUPkg5OABxx7/AMqhm6lYhnuvK+XaWyM+gH+PGeKcriRAV6Nzz7dPp7+tVZJB8zMVOTtG3J46k88+3amwylwEjHTt/WhIHLXX7iVh27+lR7D6Uy4UZWSL73cKD16mp8n1polu25XactGoUsGUktg9c9MYpEkOEikHKknDA9+c05QmMgVKNjMjEZDcc9fz/DirsmZXa1HzWyEZQmL3GSD6+4/GktWjjkYxkABQDk8E57f561Yb91vUcheVz9KZKiyhAqgOSRn2Azzj+dHLpuPm1vbUt3DplWiA+Ukkj0xisnz4+55pEZ5dwUkbc5yeMD04pcJ6UrA5XP/Z",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTY3ODAxNjM4NzE0MDE0OTY0In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2567801638705669015",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 772,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/182812080_502007844173236_199387679153031495_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=8RbecQErplYAX-SiPMa&edm=APU89FABAAAA&ccb=7-4&oh=dd871709f794d1ae5f3840e3f7a71575&oe=60E30DE8&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/182812080_502007844173236_199387679153031495_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=8RbecQErplYAX-SiPMa&edm=APU89FABAAAA&ccb=7-4&oh=2c7e4343f01c65d0939b5d052c78dedf&oe=60E42191&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 457
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/182812080_502007844173236_199387679153031495_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=8RbecQErplYAX-SiPMa&edm=APU89FABAAAA&ccb=7-4&oh=f9af01b6f68ab94af2aeec64b1741c9c&oe=60E362D1&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 536
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/182812080_502007844173236_199387679153031495_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=8RbecQErplYAX-SiPMa&edm=APU89FABAAAA&ccb=7-4&oh=dd871709f794d1ae5f3840e3f7a71575&oe=60E30DE8&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 772
												}
											],
											"is_video": false,
											"media_preview": "ACoeggupchT/ABZz9P8A69Tsco3HXH5c8U2KzuFbcU/HcO9XIIBJkSfKF6ge2eKzKuR2cZw7dsgfpWfKrFirnpxgHH6/0H4mtW1nXeYBgo5JRh1/3T7+hrJ1IGKUqP4uasW5EcDtwPr/ADzzSYQ92/T/AAqsfMTBPGRn6j1qyOeaTA1Li5WI7U+9jpk4/E+/pSZkRfkPLHGAMk59M/pVYIGJB/uAfmBViS8+z/Oo3Mp2jPTp14pDt16FJ3EL/u8hwR1/h49DS3dyZwrMAHTIJxwQfbsQfwqn5rSyGRuWY5P+f0FTk54NaJaEldV3nnoKn3qPWp44wU3LgFc5468jn6/p1qubcHvSs3sF7H//2Q==",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTY3ODAxNjM4NzA1NjY5MDE1In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									}
								]
							}
						}
					},
					{
						"node": {
							"__typename": "GraphImage",
							"id": "2567705863845784046",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 797,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/182173687_2889550071268411_6235106309875635684_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8GTNSajMu-4AX9NRQ-8&edm=APU89FABAAAA&ccb=7-4&oh=0656d0bc82b9026effd6beab67670a24&oe=60E37DA4&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/182173687_2889550071268411_6235106309875635684_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8GTNSajMu-4AX9NRQ-8&edm=APU89FABAAAA&ccb=7-4&oh=7bbab58c1e22d7c612b49933f75995c8&oe=60E32E0B&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 472
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/182173687_2889550071268411_6235106309875635684_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8GTNSajMu-4AX9NRQ-8&edm=APU89FABAAAA&ccb=7-4&oh=7affad7519f632b32ba46ccd0e82a5db&oe=60E45574&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 553
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/182173687_2889550071268411_6235106309875635684_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8GTNSajMu-4AX9NRQ-8&edm=APU89FABAAAA&ccb=7-4&oh=0656d0bc82b9026effd6beab67670a24&oe=60E37DA4&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 797
								}
							],
							"is_video": false,
							"media_preview": "ACof1pYNu0ZzlhVPUt8aAxHocMR2q1JdB1BAx3HIP8qqPLuTIx8vJ/A8iosa+pZtGLwLv5Yg5OPy/TFNaNl56n0z1/wqkbosyq3ylWJxyMjsBxg+n6+1VWu5LibY3CA8Y4z9T71Fru5W3zNeGbzE3YIwcY+npR53tXOS3DrJhCVGenr74/zzT/Pf+9+lU9BJXIDeyBdowB0wBTFvZUGFOBnNQhscinsn7st9P51RBP8AaJJVDMcgHoP61XJ+c8kDOKntMEbTkck54x0796l8rks2Mf0FLuPsVDgt8xIqXd/tfpTUiVlzyMk0eR70nqNaH//Z",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTY3NzA1ODYzODQ1Nzg0MDQ2In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Happy 90th birthday to Willie Mays! I’ll never forget giving Willie a ride on Air Force One to the All-Star game in St. Louis in 2009. Everyone was excited to see Willie—and I was, too. I told Willie that if it hadn’t been for folks like him and Jackie Robinson, I might never have made it to the White House. The spirit he played with and the way he carried himself changed the game and people’s attitudes. I’m glad he’s still going strong."
										}
									}
								]
							},
							"shortcode": "COiUuD-Nynu",
							"edge_media_to_comment": {
								"count": 2884,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1620314413,
							"edge_media_preview_like": {
								"count": 382862,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c188.0.1063.1063a/s640x640/182173687_2889550071268411_6235106309875635684_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8GTNSajMu-4AX9NRQ-8&edm=APU89FABAAAA&ccb=7-4&oh=ed3d7fbf17856c1ead10f3c3d56d8fef&oe=60E46671&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c188.0.1063.1063a/s150x150/182173687_2889550071268411_6235106309875635684_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8GTNSajMu-4AX9NRQ-8&edm=APU89FABAAAA&ccb=7-4&oh=629196f1122bfee1c8b08e89aaf1cd52&oe=60E34D20&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c188.0.1063.1063a/s240x240/182173687_2889550071268411_6235106309875635684_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8GTNSajMu-4AX9NRQ-8&edm=APU89FABAAAA&ccb=7-4&oh=b753e0318333349177418b5ea514f6ab&oe=60E300D8&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c188.0.1063.1063a/s320x320/182173687_2889550071268411_6235106309875635684_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8GTNSajMu-4AX9NRQ-8&edm=APU89FABAAAA&ccb=7-4&oh=e1dacc83d7777c5f2c26de3cf8ae152c&oe=60E3E0C9&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c188.0.1063.1063a/s480x480/182173687_2889550071268411_6235106309875635684_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8GTNSajMu-4AX9NRQ-8&edm=APU89FABAAAA&ccb=7-4&oh=f38cc786ba6bcd96a4ccb8e82db03ff3&oe=60E446CB&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c188.0.1063.1063a/s640x640/182173687_2889550071268411_6235106309875635684_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8GTNSajMu-4AX9NRQ-8&edm=APU89FABAAAA&ccb=7-4&oh=ed3d7fbf17856c1ead10f3c3d56d8fef&oe=60E46671&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": []
						}
					},
					{
						"node": {
							"__typename": "GraphVideo",
							"id": "2563287239538820358",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 421,
								"width": 750
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/180333246_537712937634692_7119978689789693645_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kIvbyRTDjvYAX9S3YXW&edm=APU89FABAAAA&ccb=7-4&oh=64ac33977658688f9757a7a6f1ea986c&oe=60DEFF44&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/180333246_537712937634692_7119978689789693645_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kIvbyRTDjvYAX9S3YXW&edm=APU89FABAAAA&ccb=7-4&oh=5c18a1b71c977d9c7cf48f499051dbd3&oe=60DF25FA&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 360
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/180333246_537712937634692_7119978689789693645_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kIvbyRTDjvYAX9S3YXW&edm=APU89FABAAAA&ccb=7-4&oh=64ac33977658688f9757a7a6f1ea986c&oe=60DEFF44&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 421
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/180333246_537712937634692_7119978689789693645_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kIvbyRTDjvYAX9S3YXW&edm=APU89FABAAAA&ccb=7-4&oh=64ac33977658688f9757a7a6f1ea986c&oe=60DEFF44&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 607
								}
							],
							"is_video": true,
							"media_preview": "ACoXvXwPmHAJ+UY9Opz71mSoDCG5L4Ixjnoew5/E96vapEZJAqj720E+gJIPPt1qhGrxOzABUU8D+IgZwQOoz/WkO5BE42bnVgwwMAHn36/n26URMN+2NSVIJOVwfz/+vViO6eR1DAgYySc8H05/CmXUP7tXDb3UgsoGCQxzjjuv070AX7dSoV3wuXUAYyx5xjjoO+elb9c7au5mEZGI8K4OCCCcfLnvz/Kuipi9DC1O38yXcuSwTIXOAcE5/Ifn0rDuXi2gJw5A8wnOD7AY9e9FFAFmZpNyoxX73Xn8+mOnH4e9TiDOfLZl9uDnIGSc0UUhk9od0gVcOwxknI4GMnHTP0roqKKEDP/Z",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTYzMjg3MjM5NTM4ODIwMzU4In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": [
									{
										"node": {
											"user": {
												"full_name": "Obama Foundation",
												"id": "1682238760",
												"is_verified": true,
												"profile_pic_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82232429_1178388959026766_1341515975295500288_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_ohc=183TFIvc4sEAX8RD4_f&edm=APU89FABAAAA&ccb=7-4&oh=7d1655bd8fbb07d0192f6b39871ea67f&oe=60E2A7CA&_nc_sid=86f79a",
												"username": "obamafoundation"
											},
											"x": 0,
											"y": 0
										}
									}
								]
							},
							"dash_info": {
								"is_dash_eligible": false,
								"video_dash_manifest": null,
								"number_of_qualities": 0
							},
							"has_audio": true,
							"video_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t50.2886-16/179607670_256478389567102_401068396724289941_n.mp4?_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=JZIFJjCI7AYAX8O9OS5&edm=APU89FABAAAA&ccb=7-4&oe=60DEB64C&oh=1dc0f45c95c189835766cc0887742fc3&_nc_sid=86f79a",
							"video_view_count": 2543605,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "When you walk into my office, the first thing you see is an American flag signed by the team that carried out the operation in Abbottabad, Pakistan, against Osama bin Laden ten years ago today. \n\nWhen I look back ten years later, I’m grateful to the thousands of people across government who made it possible for me to say to the families who had a loved one murdered on September 11 that America had never forgotten their loss. I hope you’ll take a moment to watch my conversation with Admiral McRaven at Obama.org."
										}
									}
								]
							},
							"shortcode": "COSoCnaAMUG",
							"edge_media_to_comment": {
								"count": 4085,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1619787684,
							"edge_media_preview_like": {
								"count": 345608,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c157.0.405.405a/180333246_537712937634692_7119978689789693645_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kIvbyRTDjvYAX9S3YXW&edm=APU89FABAAAA&ccb=7-4&oh=e1a1a5577d52eefe26a2ba70fa2ad659&oe=60DF0A79&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c157.0.405.405a/s150x150/180333246_537712937634692_7119978689789693645_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kIvbyRTDjvYAX9S3YXW&edm=APU89FABAAAA&ccb=7-4&oh=d4ef3a5b68fc7319608f3354f12dbf36&oe=60DF364A&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c157.0.405.405a/s240x240/180333246_537712937634692_7119978689789693645_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kIvbyRTDjvYAX9S3YXW&edm=APU89FABAAAA&ccb=7-4&oh=168c0a4b64558aa725fae67483039193&oe=60DF0C50&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c157.0.405.405a/s320x320/180333246_537712937634692_7119978689789693645_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kIvbyRTDjvYAX9S3YXW&edm=APU89FABAAAA&ccb=7-4&oh=efa029db097b15c6c13fbd9e4b9c8138&oe=60DF3372&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c157.0.405.405a/180333246_537712937634692_7119978689789693645_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kIvbyRTDjvYAX9S3YXW&edm=APU89FABAAAA&ccb=7-4&oh=e1a1a5577d52eefe26a2ba70fa2ad659&oe=60DF0A79&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c157.0.405.405a/180333246_537712937634692_7119978689789693645_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kIvbyRTDjvYAX9S3YXW&edm=APU89FABAAAA&ccb=7-4&oh=e1a1a5577d52eefe26a2ba70fa2ad659&oe=60DF0A79&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": [],
							"product_type": "feed"
						}
					},
					{
						"node": {
							"__typename": "GraphVideo",
							"id": "2561204186406488012",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1920,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/177695526_3425268077574042_994785072110672532_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WovZo0W0LxAAX_HZyJ6&edm=APU89FABAAAA&ccb=7-4&oh=1bae45cc8b79814cd03213329d1f2de6&oe=60DF1A83&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/177695526_3425268077574042_994785072110672532_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WovZo0W0LxAAX_HZyJ6&edm=APU89FABAAAA&ccb=7-4&oh=b403644d256dbcd08b71f4ae824d3840&oe=60DEC30B&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1137
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/177695526_3425268077574042_994785072110672532_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WovZo0W0LxAAX_HZyJ6&edm=APU89FABAAAA&ccb=7-4&oh=37fdf3fdea791454a606bbd471c8579b&oe=60DEDB0F&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 1333
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/177695526_3425268077574042_994785072110672532_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WovZo0W0LxAAX_HZyJ6&edm=APU89FABAAAA&ccb=7-4&oh=1bae45cc8b79814cd03213329d1f2de6&oe=60DF1A83&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1920
								}
							],
							"is_video": true,
							"media_preview": "ABcqzM0Zq/EghUfaFVkLcMv3vXOem326mpIfLkdG2qBLkdBjBHGBjgrxz1JzSuVYzc0VfjjS1J8wxykHG0MGP1PcYopiHTXQ2tHgnClRnoCOB+FNjsisYjDYlXDpk8Z+8cd+nt+FUgY0Qli3BxjIz+f5mpDeEbZiDgH2+g+vFTY00L6xm8JdAMsec46jr2ootn2oDEzBWyegyPXP4jFFL7wt6GTgHqKXAxjt6U2irMhQcDA4FFNooA//2Q==",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTYxMjA0MTg2NDA2NDg4MDEyIn0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"dash_info": {
								"is_dash_eligible": false,
								"video_dash_manifest": null,
								"number_of_qualities": 0
							},
							"has_audio": true,
							"video_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t50.2886-16/10000000_292538532484453_4086775825423793587_n.mp4?_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=CETmvA2IVdwAX-Pjay6&edm=APU89FABAAAA&ccb=7-4&oe=60DEDCDD&oh=754f453f1534a4f50f1b61eb7e515549&_nc_sid=86f79a",
							"video_view_count": 1368773,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "I recently joined @Ava and the @LATimes Book Club to talk about A Promised Land. We ended up touching on everything from the civil rights leaders who inspired me to pursue a career in public service, to the values that are important for leadership, to the members of the next generation who give me so much hope for the future. Check out our conversation."
										}
									}
								]
							},
							"shortcode": "COLOaNAAIfM",
							"edge_media_to_comment": {
								"count": 1888,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1619546484,
							"edge_media_preview_like": {
								"count": 154658,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.420.1080.1080a/s640x640/177695526_3425268077574042_994785072110672532_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WovZo0W0LxAAX_HZyJ6&edm=APU89FABAAAA&ccb=7-4&oh=48a67953dc9aea525e15a37b74eac4e6&oe=60DEBFF4&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e15/p150x150/177695526_3425268077574042_994785072110672532_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WovZo0W0LxAAX_HZyJ6&edm=APU89FABAAAA&ccb=7-4&oh=c7e4ee3b7d4aba1b7c2c89b8f502e422&oe=60DF00B8&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 266
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e15/p240x240/177695526_3425268077574042_994785072110672532_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WovZo0W0LxAAX_HZyJ6&edm=APU89FABAAAA&ccb=7-4&oh=b27f7c176ce43b17124441688a027ea8&oe=60DEB672&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 426
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e15/p320x320/177695526_3425268077574042_994785072110672532_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WovZo0W0LxAAX_HZyJ6&edm=APU89FABAAAA&ccb=7-4&oh=cbc5f1f41321103cc3438826201004a3&oe=60DF3410&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 568
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e15/p480x480/177695526_3425268077574042_994785072110672532_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WovZo0W0LxAAX_HZyJ6&edm=APU89FABAAAA&ccb=7-4&oh=18a2be788992cc39ff8936f8a34f492c&oe=60DEDC09&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 853
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/177695526_3425268077574042_994785072110672532_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WovZo0W0LxAAX_HZyJ6&edm=APU89FABAAAA&ccb=7-4&oh=b403644d256dbcd08b71f4ae824d3840&oe=60DEC30B&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1137
								}
							],
							"coauthor_producers": [],
							"product_type": "igtv"
						}
					},
					{
						"node": {
							"__typename": "GraphSidecar",
							"id": "2560659961537463294",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1350,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=166459f457547a7fb79b7cd8a8e9fe00&oe=60E490AC&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=17c6ae765815f196c94100b40fe0d6ed&oe=60E43ECF&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 800
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=9864853fdc12cc8a3e0acf341fe05e9c&oe=60E3880F&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 937
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=166459f457547a7fb79b7cd8a8e9fe00&oe=60E490AC&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1350
								}
							],
							"is_video": false,
							"media_preview": null,
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTYwNjU5OTYxNTM3NDYzMjk0In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": [
									{
										"node": {
											"user": {
												"full_name": "All On The Line",
												"id": "1545904519",
												"is_verified": true,
												"profile_pic_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/51240557_351474608785580_5113683784553725952_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_ohc=Tm-OMHdMHiUAX-V9i8g&edm=APU89FABAAAA&ccb=7-4&oh=1273b5d904cee119aac256d1e45d2b03&oe=60E497FC&_nc_sid=86f79a",
												"username": "allontheline"
											},
											"x": 0.5,
											"y": 0.8514492754
										}
									}
								]
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Today is Apportionment Day. States have just learned how many seats they have in Congress for the next decade. This process is an important step in making sure our maps—and electoral process—better reflect our communities.\n \nThe redistricting process isn’t just about where districts are drawn—it’s also about how many districts are drawn in each state. It’s intended to provide folks with equal and fair representation in the House of Representatives and Electoral College, but as we know, map manipulators can often take power away from communities by drawing districts in unfair ways.\n \nThis year, state legislatures are undertaking this process and will draw new maps that will determine political power through 2031. We must ensure that every single person has equitable representation and that our electoral maps are drawn fairly. Join @AllOnTheLine in their efforts to hold elected leaders accountable and make sure we achieve fair maps this year."
										}
									}
								]
							},
							"shortcode": "COJSqsGAYP-",
							"edge_media_to_comment": {
								"count": 1545,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1619474476,
							"edge_media_preview_like": {
								"count": 177264,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=edbc8cf412849a0ef54b70efb14ad6cf&oe=60E32139&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s150x150/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=9776cc439cb61096e536530ce8236b03&oe=60E45034&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s240x240/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=9430bc03f79c00abd91a7186d67e2945&oe=60E376FA&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s320x320/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=4939b6d0066cffa9f229cb2dd42cfeed&oe=60E3F4C4&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=19945477f199fbaa0a0a609a4a09cc7f&oe=60E4905A&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=edbc8cf412849a0ef54b70efb14ad6cf&oe=60E32139&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": [],
							"edge_sidecar_to_children": {
								"edges": [
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2560659957158720087",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1350,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=166459f457547a7fb79b7cd8a8e9fe00&oe=60E490AC&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=17c6ae765815f196c94100b40fe0d6ed&oe=60E43ECF&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 800
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=9864853fdc12cc8a3e0acf341fe05e9c&oe=60E3880F&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 937
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/178528903_513629613381172_569630820524312075_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=53VojkgEXhkAX-8aFfH&edm=APU89FABAAAA&ccb=7-4&oh=166459f457547a7fb79b7cd8a8e9fe00&oe=60E490AC&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1350
												}
											],
											"is_video": false,
											"media_preview": "ACEq6F2IHygk/hx9eRVf7Q3+yc/T/wCKqZpgrberY6Ukc4k4wRj1p2FdEP2knpj/AD/wKrEblhyPx7H9TTtw6etG4UhjqKKKAICMOTjr0NRmUo4VyAHyF+o56/SrVZ97YC5G5ThxjGTlevPHrjv7ChaA9S0wJ/mPrRCpAPHOeSe9EUCxRiNSSFGASef0qVAQMMckd/5UrLcLvYdRRRTAKh2xpgcD2/X0qaigCPCE8fl/kVJRRQAUUUUAf//Z",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTYwNjU5OTU3MTU4NzIwMDg3In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": [
													{
														"node": {
															"user": {
																"full_name": "All On The Line",
																"id": "1545904519",
																"is_verified": true,
																"profile_pic_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/51240557_351474608785580_5113683784553725952_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_ohc=Tm-OMHdMHiUAX-V9i8g&edm=APU89FABAAAA&ccb=7-4&oh=1273b5d904cee119aac256d1e45d2b03&oe=60E497FC&_nc_sid=86f79a",
																"username": "allontheline"
															},
															"x": 0.5,
															"y": 0.8514492754
														}
													}
												]
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2560659957183823775",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1350,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/177333494_211877013719689_1876701946729011650_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=pGusOrJQCKMAX-g0904&edm=APU89FABAAAA&ccb=7-4&oh=4a452feddbf37148b28c9ead9b11abd1&oe=60E2D996&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/177333494_211877013719689_1876701946729011650_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=pGusOrJQCKMAX-g0904&edm=APU89FABAAAA&ccb=7-4&oh=3ba4d6a0e0eb258e51ca115e416fbc4c&oe=60E35ED1&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 800
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/177333494_211877013719689_1876701946729011650_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=pGusOrJQCKMAX-g0904&edm=APU89FABAAAA&ccb=7-4&oh=d8fa71ce4d3aed0ad5e63679cfb6928b&oe=60E3F7D5&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 937
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/177333494_211877013719689_1876701946729011650_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=pGusOrJQCKMAX-g0904&edm=APU89FABAAAA&ccb=7-4&oh=4a452feddbf37148b28c9ead9b11abd1&oe=60E2D996&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1350
												}
											],
											"is_video": false,
											"media_preview": "ACEq6SkqKXHGRn8cf/rqP5f7v/jw/wAaYtf6/wCGLNITioVWPuAPT5uv61ISCOOaQa9R9FR7jRQMSXt1PXoAf5/0pmPYn8F9/enyjpxn8Cf5dKi2+2f+AH/GgB2CB3/75WpFI6YI/ADP5VEFyegHf7p/nmpFGBjj8OKAHYFFGaKAHMobr2qJwkeM556feP8ALNT0lAFdQhPy5yPr/WpMGlJptAC4opKKAP/Z",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTYwNjU5OTU3MTgzODIzNzc1In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2560659957242566021",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1350,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/173874461_499853804484716_5995458296408949097_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=NAiHj3wV_-kAX-hgg5I&edm=APU89FABAAAA&ccb=7-4&oh=de94454e50b74086723a19589b97971b&oe=60E30E9B&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/173874461_499853804484716_5995458296408949097_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=NAiHj3wV_-kAX-hgg5I&edm=APU89FABAAAA&ccb=7-4&oh=2503f57ed8808740351e47cd8c2cc56b&oe=60E2CC60&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 800
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/173874461_499853804484716_5995458296408949097_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=NAiHj3wV_-kAX-hgg5I&edm=APU89FABAAAA&ccb=7-4&oh=782a9e1927f6797db60ffc7be8556128&oe=60E358DC&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 937
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/173874461_499853804484716_5995458296408949097_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=NAiHj3wV_-kAX-hgg5I&edm=APU89FABAAAA&ccb=7-4&oh=de94454e50b74086723a19589b97971b&oe=60E30E9B&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1350
												}
											],
											"is_video": false,
											"media_preview": "ACEq6SioJs8Yz36Z/p/WoQWP94f99ev0oAu0hOKpZfqN35t7dsVYVSBkknPqc/zAwfWgCaiotxooAiuccZx3649vUGocDpx/476cj7tXHfb0/wA/qKZ5h9R+n/xVMluxU+Xvj/x3j3Hy1biYsCScgnjp/gKPMbr/AC//AF0oYnr/AJ/U0Bcdiik3UUDuONMYgf8A6qWmGuSMmDG7vSmlqa1RmuqOpg5Eu6ioKK1sRzM//9k=",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTYwNjU5OTU3MjQyNTY2MDIxIn0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2560659957259388454",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1350,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/178084014_553895228911251_8862537730697437281_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=ldIsepZem_kAX9QP813&edm=APU89FABAAAA&ccb=7-4&oh=67e13a1a3970ec8613540c7136f52906&oe=60E3DB4B&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/178084014_553895228911251_8862537730697437281_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=ldIsepZem_kAX9QP813&edm=APU89FABAAAA&ccb=7-4&oh=609160f905d2050e137e73dd129a2f79&oe=60E36890&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 800
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/178084014_553895228911251_8862537730697437281_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=ldIsepZem_kAX9QP813&edm=APU89FABAAAA&ccb=7-4&oh=3ee49ca2e86bd638e643c600ad3d22d9&oe=60E2AE8C&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 937
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/178084014_553895228911251_8862537730697437281_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=ldIsepZem_kAX9QP813&edm=APU89FABAAAA&ccb=7-4&oh=67e13a1a3970ec8613540c7136f52906&oe=60E3DB4B&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1350
												}
											],
											"is_video": false,
											"media_preview": "ACEq6IDFJ05pkpAxnHf0/HuKh3KOcj8x/jTsS35FsdKDVZXQHkj8x/j7VMrqwyCDj05oGncdiim7hRSGRz5GMe/r7ehFQZPv/wCPZ/8AQuamn5x3/D/7Fv6VBjcPf6D0/wCudAEokZeBzj1BJz9SasISeTj2x/X3qlj06/Qf/G6mgAGSPoeOp/75X6UCLVFN3UUBcjZVbrzimFEHb+dSUw1yxkwYu+ml6aajNdUdTByJd9FQUVrYjmZ//9k=",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTYwNjU5OTU3MjU5Mzg4NDU0In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2560659957175356964",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1350,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/178753273_214363593452131_6299570876802062457_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=x40IXMWdZ5oAX9PsRys&edm=APU89FABAAAA&ccb=7-4&oh=d55f1326bfe80352e4bab0264bce06d4&oe=60E431B2&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/178753273_214363593452131_6299570876802062457_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=x40IXMWdZ5oAX9PsRys&edm=APU89FABAAAA&ccb=7-4&oh=ea79709d9a03f60a095bbf025a0e283d&oe=60E33935&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 800
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/178753273_214363593452131_6299570876802062457_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=x40IXMWdZ5oAX9PsRys&edm=APU89FABAAAA&ccb=7-4&oh=e1cbb4372ce45064af30c9118da8233d&oe=60E2C771&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 937
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/178753273_214363593452131_6299570876802062457_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=x40IXMWdZ5oAX9PsRys&edm=APU89FABAAAA&ccb=7-4&oh=d55f1326bfe80352e4bab0264bce06d4&oe=60E431B2&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1350
												}
											],
											"is_video": false,
											"media_preview": "ACEq6OioJWK4xn8P/wBk/wBKhDv6nH+P/bOgC7SZqpvb1OfTt+eyrERyOpb69v0FAElFFFAEMqlsYGfy4/MiolhYnnK49QOc/RiamkPTt15zio95z/8AZdf0pohytoO8g9yPy/8Ar1Ki7Rjrj/PvVcZbgEn/AIF/9arCkgc9frn9aGhp3HUUmaKQ7iZppbFLTDXMpMGLvppammmGumOpi2Sb6KhorSxPMz//2Q==",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTYwNjU5OTU3MTc1MzU2OTY0In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									}
								]
							}
						}
					},
					{
						"node": {
							"__typename": "GraphVideo",
							"id": "2559030081444094010",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1920,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/177323151_183568293617863_98177995978851225_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcZZCGWtc1EAX8hZXCi&edm=APU89FABAAAA&ccb=7-4&oh=6fb0ef60993a6c8bbca63c68c20134e6&oe=60DEFC61&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/177323151_183568293617863_98177995978851225_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcZZCGWtc1EAX8hZXCi&edm=APU89FABAAAA&ccb=7-4&oh=b408431d7eaea1a0e0310903df07e6bd&oe=60DF1B67&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1137
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/177323151_183568293617863_98177995978851225_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcZZCGWtc1EAX8hZXCi&edm=APU89FABAAAA&ccb=7-4&oh=c74a3d5ac2b48cb44f7e6615ed123d84&oe=60DF2E5A&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 1333
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/177323151_183568293617863_98177995978851225_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcZZCGWtc1EAX8hZXCi&edm=APU89FABAAAA&ccb=7-4&oh=6fb0ef60993a6c8bbca63c68c20134e6&oe=60DEFC61&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1920
								}
							],
							"is_video": true,
							"media_preview": "ABcqiklGx2ZtxACjOCQMkccD2yauQytKiM3J2AZ9cEj+lUrmGFeFVlJ6bj6e3cVHBbqRk5bBJGGCg4weh60m0irN2L1xIoJTGAecA4xz1/GiopLVZG3MTnGMhgv6Hmio5kinFsmeFrv51/gHc8Hv/n61XZCwOAEP8z3+nHpVpchcYbrtHB6Y9sE4z1AqhdXLqSqISCfQ/TnHeq1YtFsII5IxvdgwB+vHQDkdqKricNhGBC9z0PT8qKVrhe2x0El08MipjA6c1US4Llyndu/Ht+tJJyOef/1Coo/vH/gNUIqXAklyVGeecHH9ecfpRV6bqaKBtXP/2Q==",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTU5MDMwMDgxNDQ0MDk0MDEwIn0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"dash_info": {
								"is_dash_eligible": false,
								"video_dash_manifest": null,
								"number_of_qualities": 0
							},
							"has_audio": true,
							"video_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t50.2886-16/10000000_504898077333395_4471349798942802602_n.mp4?_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=QtOy8xwJunIAX90kKQv&edm=APU89FABAAAA&ccb=7-4&oe=60DEE27D&oh=cbfe065b0c7fb3869f0ba0c1dcf2668d&_nc_sid=86f79a",
							"video_view_count": 2479221,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "I love wandering into independent bookstores and discovering new voices and new authors. And those bookstores often form the backbone of our communities. That’s why, on Independent Bookstore Day, I wanted to talk with some of the folks who’ve been doing so much for readers and authors across the country."
										}
									}
								]
							},
							"shortcode": "CODgEz-A6A6",
							"edge_media_to_comment": {
								"count": 3526,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1619280278,
							"edge_media_preview_like": {
								"count": 303935,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.420.1080.1080a/s640x640/177323151_183568293617863_98177995978851225_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcZZCGWtc1EAX8hZXCi&edm=APU89FABAAAA&ccb=7-4&oh=c828225d737a89c29827868bdd0213f2&oe=60DF2E69&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p150x150/177323151_183568293617863_98177995978851225_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcZZCGWtc1EAX8hZXCi&edm=APU89FABAAAA&ccb=7-4&oh=b3546f45dfd372cc9198a61607104e53&oe=60DED248&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 266
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p240x240/177323151_183568293617863_98177995978851225_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcZZCGWtc1EAX8hZXCi&edm=APU89FABAAAA&ccb=7-4&oh=b53af118c0ae12c55c593e8fb79da3da&oe=60DEF4B3&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 426
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p320x320/177323151_183568293617863_98177995978851225_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcZZCGWtc1EAX8hZXCi&edm=APU89FABAAAA&ccb=7-4&oh=c96d791686c52f48bb6eb0ddfa27d437&oe=60DEBD0B&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 568
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p480x480/177323151_183568293617863_98177995978851225_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcZZCGWtc1EAX8hZXCi&edm=APU89FABAAAA&ccb=7-4&oh=f1efa392afda4312c5474aeb7b11437c&oe=60DF1C97&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 853
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/177323151_183568293617863_98177995978851225_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcZZCGWtc1EAX8hZXCi&edm=APU89FABAAAA&ccb=7-4&oh=b408431d7eaea1a0e0310903df07e6bd&oe=60DF1B67&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1137
								}
							],
							"coauthor_producers": [],
							"product_type": "igtv"
						}
					},
					{
						"node": {
							"__typename": "GraphSidecar",
							"id": "2557566388776514151",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1080,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=9937c555dfef63f596e5a5af027f5a9a&oe=60E3D67E&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=9acf159a44b4aab49f7c346738598e94&oe=60E316BA&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=b58015e9f18601f3e827e649da0f7fdd&oe=60E46D7E&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 750
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=9937c555dfef63f596e5a5af027f5a9a&oe=60E3D67E&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1080
								}
							],
							"is_video": false,
							"media_preview": null,
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTU3NTY2Mzg4Nzc2NTE0MTUxIn0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "No challenge poses a greater threat to our planet and to future generations than climate change. That’s why this Earth Day, I’m proud that the @ObamaFoundation is supporting young people who are helping lead this fight, and that we’ve designed the Obama Presidential Center to be sustainable while showing visitors how they can make a difference in their own communities."
										}
									}
								]
							},
							"shortcode": "CN-TRR8gLJn",
							"edge_media_to_comment": {
								"count": 1803,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1619105693,
							"edge_media_preview_like": {
								"count": 384331,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=9acf159a44b4aab49f7c346738598e94&oe=60E316BA&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=e83844ac9ff929c5c39cfaf2183dbea3&oe=60E3F2BD&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=d378e1fa2f8c433187d2778da6f6bfd4&oe=60E2E23B&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=2c0e965001d25475d4a56b6df68ef504&oe=60E46945&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=313a28cef03af7064d5d09736d71bfbc&oe=60E3BAC4&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=9acf159a44b4aab49f7c346738598e94&oe=60E316BA&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": [],
							"edge_sidecar_to_children": {
								"edges": [
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2557566384657810496",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1080,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=9937c555dfef63f596e5a5af027f5a9a&oe=60E3D67E&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=9acf159a44b4aab49f7c346738598e94&oe=60E316BA&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 640
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=b58015e9f18601f3e827e649da0f7fdd&oe=60E46D7E&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 750
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/176238744_178178334155579_3912311456944875112_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PnBJK9GcP6wAX9ExqhJ&edm=APU89FABAAAA&ccb=7-4&oh=9937c555dfef63f596e5a5af027f5a9a&oe=60E3D67E&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1080
												}
											],
											"is_video": false,
											"media_preview": "ACoqYkRYfMOOck8H8O5+lOa2jkJKnGfTp19KsFgVAPGD/nn2qWLZgnG0Z4Pr/k1C7FGS9myHjke3+FSxxrnDZKDkgdcj+hq/OI8c5qsFUqdhOB1J7/lSe4ykUDdTjnrn9Px6Z7VEXGeAMfjWn9lUx7gc4yxH0OO/tzVMW6f3h+K0EmqmC3PPX+fFXAAFwtZEshQ5XHygnB/z/Opt8nlh9wXOOnXntQWXJPnQh1/AHrVB3wh2rjAGAOf85pqzSB8MflHJz0x6n2qbDAMSRuAyPTuR/OmxCRP5kYjOQ2Dn05yR9eRzSiMDgyN+Y/wp2/CKT1Gc/iCKrNtJJ9TQInNpGTlZBnoeO1TrDCq4chvzA/nWQzH1NLk5qrAaRgiOSGBz65PHp159qgHlqpUHK49yfX/OapkkGh/mHPP1pWAV3UAIpPHQY/rTd3v+lUSx55NR7j6mgVz/2Q==",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTU3NTY2Mzg0NjU3ODEwNDk2In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2557566384640967430",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1080,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/176170509_372504227843118_2879515195279508030_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=_xVtzItry-4AX9aZjrH&edm=APU89FABAAAA&ccb=7-4&oh=55106fae700eedeecfeb9016a5fcf16b&oe=60E33A76&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/176170509_372504227843118_2879515195279508030_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=_xVtzItry-4AX9aZjrH&edm=APU89FABAAAA&ccb=7-4&oh=b1ee54b49db2a6ff31b6100dc590f868&oe=60E349B2&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 640
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/176170509_372504227843118_2879515195279508030_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=_xVtzItry-4AX9aZjrH&edm=APU89FABAAAA&ccb=7-4&oh=e5737a15c2302d7a568c260a7bd4fb0c&oe=60E48A76&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 750
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/176170509_372504227843118_2879515195279508030_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=_xVtzItry-4AX9aZjrH&edm=APU89FABAAAA&ccb=7-4&oh=55106fae700eedeecfeb9016a5fcf16b&oe=60E33A76&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1080
												}
											],
											"is_video": false,
											"media_preview": "ACoqk2hQDw2VB47Zq1Fb+YN3QGq6LGCUXna+0fTPByfyxWiiDgDgj9KztqWJEvzlTg4HY/p/n8KsYApVQKcgcmnVoiCMikxTzTNwp3FY561k2rk/fOMf59cc5PrWrFNg9c/T39f89q56InHerq7lAB6H+lZs20OjaRVGc0pNYBZyME8Dnk4/nUrTScY6cdMGi5NjRkkwcVW+0KOCf0qm7yOuCOnU9M+gpvkv6/qtK5VjIikI9Pxq4t1xjI+hAP8A+qsulqrEXNX7XGvUAn2H+NAvUA+6R9Mf4VlA06iwczNL7cP7v45x/Kj7e390fp/hWdRT5UHMz//Z",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTU3NTY2Mzg0NjQwOTY3NDMwIn0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2557566384582343396",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1080,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/176276385_2965472497016861_1803329739559799552_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=G-gYXPoUQlUAX-fMaiA&edm=APU89FABAAAA&ccb=7-4&oh=2b00e5d4a196cf9a8dbd635a0440e970&oe=60E38FBE&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/176276385_2965472497016861_1803329739559799552_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=G-gYXPoUQlUAX-fMaiA&edm=APU89FABAAAA&ccb=7-4&oh=237e11897b4e26d7cdbc1a22190e9390&oe=60E3F615&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 640
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/176276385_2965472497016861_1803329739559799552_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=G-gYXPoUQlUAX-fMaiA&edm=APU89FABAAAA&ccb=7-4&oh=837c67eb3edc770063cdb742370e50cc&oe=60E2C1AE&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 750
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/176276385_2965472497016861_1803329739559799552_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=G-gYXPoUQlUAX-fMaiA&edm=APU89FABAAAA&ccb=7-4&oh=2b00e5d4a196cf9a8dbd635a0440e970&oe=60E38FBE&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1080
												}
											],
											"is_video": false,
											"media_preview": "ACoqpqoB6H8amWMMcmjbluBj+X1FT7RgEHJ7jn14xWPU1CNBE2GGGxj8f8agcYPPtWhK54zgE/TH4+lVJk7demP6/Ue/4UgGxLuPA69fp/nvUvlA85/UUiJISFHVgc+49vQelXvsRPOF/Hd/jVK4mZ4GeCCenT6/lVsrhlPygdMAg9fXFUoZGU4GCF4Jz7VOVMy5OCwPBHpj/Gm0BofZ0wDgZOapXEWz7pOSRxjtntxx7ipxK+VIGSV6Zx6DIH+T7VWuJJWYDADqB3HqO3Tk4osItxr5Y9SemMjn3qQTuBjArMMk/ckfl19OBSGQjqzZ/Gna2wepmRy7TkHqeRVxJ3PQ/nWTU6E1Qi45mZt2fyOKVpJM5P59+v5YquGPrQxNAXJ1kYHIGT69/epjICcleT15rPBNP3H1oA//2Q==",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTU3NTY2Mzg0NTgyMzQzMzk2In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2557566384565577592",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1080,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/176110038_800301000609546_1322172573208271256_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=YZFm_zPvWuQAX_Jd_OA&edm=APU89FABAAAA&ccb=7-4&oh=ced6b1c0f30caa5c270710e18999dc21&oe=60E30FEC&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/176110038_800301000609546_1322172573208271256_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=YZFm_zPvWuQAX_Jd_OA&edm=APU89FABAAAA&ccb=7-4&oh=afa941c90b26d62998ed1daf158c3c1a&oe=60E41DF0&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 640
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/176110038_800301000609546_1322172573208271256_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=YZFm_zPvWuQAX_Jd_OA&edm=APU89FABAAAA&ccb=7-4&oh=be8c26675b28788c60cff6894a198dba&oe=60E2DA6C&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 750
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/176110038_800301000609546_1322172573208271256_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=YZFm_zPvWuQAX_Jd_OA&edm=APU89FABAAAA&ccb=7-4&oh=ced6b1c0f30caa5c270710e18999dc21&oe=60E30FEC&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1080
												}
											],
											"is_video": false,
											"media_preview": "ACoqk20u2rGynCOqEVClIY8VZcY6VEvzrupXHYqlaTZVhhTcUxFizuVmAU/e/wAP61dcbVOOp6Vy6FrZuRyvY5/P8O3NWftshXA9cis7l2NZ8Z98c1FblSm3uKjEhKFz1x+FRWLg7mfoq5P50kMtMKh3VcOx13Kc5qoVFVckyftpZt74Y4xyP8805Z0YAFQMZyRnJz69qoCpQaVh3L/nAjB7+lRxO6qQBw3B6dqqEmkzRYLlwO8XI6emaDeSe36VSyaSnYD/2Q==",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZWE3MTAzYjc4ZjMxNDU3Mjg2ZDZmOTFhOTk0ZWEyM2YyNTU3NTY2Mzg0NTY1NTc3NTkyIn0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									}
								]
							}
						}
					}
				]
			}
		}
	},
	"status": "ok"
}

// SECOND REQEUST
let req2 = async () => {
    await fetch(
        "https://www.instagram.com/graphql/query/?query_hash=ea4baf885b60cbf664b34ee760397549&variables=" +
        encodeURIComponent(
            JSON.stringify({
                id: "10206720",
                first: 12,
                after: "QVFDU1dsZ01ESW1scWZJbVFPN1F6Z05Ddkh3TEpLNUVxWHh6Q0ZON01ZSFFwQ1dNdlJvUGdvSGtOSWJycFd1U1dubHJQOXJpZG8yR0tIY0FKVGJpR3Nydg==",
            })
        ),
        {
            credentials: "include",
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
                Accept: "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "X-CSRFToken": "1V1HFbTFljzsHzJCLQdYunbRnKvCUXEt",
                "X-IG-App-ID": "936619743392459",
                "X-ASBD-ID": "437806",
                "X-IG-WWW-Claim": "0",
                "X-Requested-With": "XMLHttpRequest",
                "Alt-Used": "www.instagram.com",
            },
            referrer: "https://www.instagram.com/barackobama/",
            method: "GET",
            mode: "cors",
        }
    );
};

let resp2 = {
	"data": {
		"user": {
			"edge_owner_to_timeline_media": {
				"count": 523,
				"page_info": {
					"has_next_page": true,
					"end_cursor": "QVFCTzVtUG5UdEdRb201bTl5bkF4M0I1MHByclBiRkRuNUVod1ZMZWp1dGhKMjV3YWN5Rlp4QnNOai10b3hYUXFLS0N3VDhjUUxJQzg4T09aYUhDSjFVUA=="
				},
				"edges": [
					{
						"node": {
							"__typename": "GraphSidecar",
							"id": "2556339077117058818",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1080,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=8e62d574927fd9519c3024eaea9ad511&oe=60E3C4A8&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=2f98c13daef211a3505e8f261e9db95c&oe=60E2BD4F&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=43b1744f6aabba0ec7b4ad3ed80c5cb0&oe=60E460F8&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 750
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=8e62d574927fd9519c3024eaea9ad511&oe=60E3C4A8&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1080
								}
							],
							"is_video": false,
							"media_preview": null,
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTU2MzM5MDc3MTE3MDU4ODE4In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Today, a jury did the right thing. But true justice requires much more. Michelle and I send our prayers to the Floyd family, and we stand with all those who are committed to guaranteeing every American the full measure of justice that George and so many others have been denied."
										}
									}
								]
							},
							"shortcode": "CN58Ni5Ax8C",
							"edge_media_to_comment": {
								"count": 5191,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1618959386,
							"edge_media_preview_like": {
								"count": 923925,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=2f98c13daef211a3505e8f261e9db95c&oe=60E2BD4F&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=db73496d8143f41b041aab80648914b7&oe=60E2BDBC&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=dfe0bab887b0ed282a5eadfc70af4096&oe=60E42974&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=0bc4cec83d50a17517db1a7a663c4312&oe=60E4982D&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=ec62abcb93eeec7c4d041f94a8beb87e&oe=60E36FEF&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=2f98c13daef211a3505e8f261e9db95c&oe=60E2BD4F&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": [],
							"edge_sidecar_to_children": {
								"edges": [
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2556339073518303929",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1080,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=8e62d574927fd9519c3024eaea9ad511&oe=60E3C4A8&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=2f98c13daef211a3505e8f261e9db95c&oe=60E2BD4F&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 640
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=43b1744f6aabba0ec7b4ad3ed80c5cb0&oe=60E460F8&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 750
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/175596198_1681886885350556_6193585495187202439_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bHwa7-HmDYUAX9Rz25f&edm=APU89FABAAAA&ccb=7-4&oh=8e62d574927fd9519c3024eaea9ad511&oe=60E3C4A8&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1080
												}
											],
											"is_video": false,
											"media_preview": "ACoqs6fZwzQh5FyxJ5yex9jVs6db9k/Vv/r1Fpv/AB7j6t/Or2D6/rVNu71ISVloVf7Pt/7g/wC+npw02D+4P++mqxj3/WjB9f1pXfcqy7IrPptuFJCdAe59PrXLiuzYDY3fg/yrjBWsHe5lNWtY6PTf+Pde/Lfzq9kDtVHTcfZ1z6t/Or3HvWT3ZqtkO3D0FG4egpvHvRx70hji2UIxjg/yrjBXZHGxsdcH+VcaK1h1Mp9Do9Nx5AyQMFup96vcf3l/OuOpMU3C+txKdtLHafJ/eH5ij5P7w/MVxeKMUuTzHz+R2TlArYYdD3HpXHCkxS1SViJPmP/Z",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTU2MzM5MDczNTE4MzAzOTI5In0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									},
									{
										"node": {
											"__typename": "GraphImage",
											"id": "2556339073526743273",
											"gating_info": null,
											"fact_check_overall_rating": null,
											"fact_check_information": null,
											"media_overlay_info": null,
											"sensitivity_friction_info": null,
											"sharing_friction_info": {
												"should_have_sharing_friction": false,
												"bloks_app_url": null
											},
											"dimensions": {
												"height": 1080,
												"width": 1080
											},
											"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/175934328_945614852645476_1612636400701835696_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jNzXshEd-eQAX9AqMsl&edm=APU89FABAAAA&ccb=7-4&oh=51ba2e482a3e3ecf8ef9910538d3c194&oe=60E47B25&_nc_sid=86f79a",
											"display_resources": [
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/175934328_945614852645476_1612636400701835696_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jNzXshEd-eQAX9AqMsl&edm=APU89FABAAAA&ccb=7-4&oh=4fafc82efc42c85e79ecb4c5012a2500&oe=60E49D21&_nc_sid=86f79a",
													"config_width": 640,
													"config_height": 640
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/175934328_945614852645476_1612636400701835696_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jNzXshEd-eQAX9AqMsl&edm=APU89FABAAAA&ccb=7-4&oh=8dd5b3013cce8a6cb951b15146a78323&oe=60E40C65&_nc_sid=86f79a",
													"config_width": 750,
													"config_height": 750
												},
												{
													"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/175934328_945614852645476_1612636400701835696_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jNzXshEd-eQAX9AqMsl&edm=APU89FABAAAA&ccb=7-4&oh=51ba2e482a3e3ecf8ef9910538d3c194&oe=60E47B25&_nc_sid=86f79a",
													"config_width": 1080,
													"config_height": 1080
												}
											],
											"is_video": false,
											"media_preview": "ACoqs6fZwSwh5FyxJ5yex9jVz+z7X+7+rf41Dpv+oX/eb+dXsDuf51Tbu9SElZaFf+z7X+7+rf40f2fa/wB39W/xqzhfX9KML6/pSu+5Vl2RVbTrbaSF5APdv8a5euzO3a2OTg/yrixWkHe5lNWtY6bS13W4+rfzrR8sepqjpP8Ax7j/AHm/nWlWb3ZotkR+WPU0uwU+ikUROoCnHof5VxIruJPun6H+VcOK1h1Mp9Dp9KYC3GSBy3f3rR8xfUfmK4ikxTcL63Ep20sdx5i+o/MUeYvqPzFcPijFLk8x8/kdrI67TyOh7+1cUKMUtUlYiUuY/9k=",
											"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTU2MzM5MDczNTI2NzQzMjczIn0sInNpZ25hdHVyZSI6IiJ9",
											"has_upcoming_event": false,
											"edge_media_to_tagged_user": {
												"edges": []
											},
											"accessibility_caption": null
										}
									}
								]
							}
						}
					},
					{
						"node": {
							"__typename": "GraphVideo",
							"id": "2554924076636476144",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1138,
								"width": 640
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/174390000_4150568561661426_6939914991422996869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LAKzEji1MGwAX9rxvS1&edm=APU89FABAAAA&ccb=7-4&oh=dcffe735168bfb3d9e99c123976d7ba0&oe=60DEC581&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/174390000_4150568561661426_6939914991422996869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LAKzEji1MGwAX9rxvS1&edm=APU89FABAAAA&ccb=7-4&oh=dcffe735168bfb3d9e99c123976d7ba0&oe=60DEC581&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1138
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/174390000_4150568561661426_6939914991422996869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LAKzEji1MGwAX9rxvS1&edm=APU89FABAAAA&ccb=7-4&oh=dcffe735168bfb3d9e99c123976d7ba0&oe=60DEC581&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 1334
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/174390000_4150568561661426_6939914991422996869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LAKzEji1MGwAX9rxvS1&edm=APU89FABAAAA&ccb=7-4&oh=dcffe735168bfb3d9e99c123976d7ba0&oe=60DEC581&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1921
								}
							],
							"is_video": true,
							"media_preview": "ABcqftxTgM0k7Bs7CCASc+lCEnGMtn6cf/Wz+NRc0tpcq3mMgelFFwDuweT7UVZBQaZm709p92B2HTt1qkrdqUNzRYLm5p92+/y/vAgnBx1+p9qKxY5NrbuD7HkUUDTJhHGBjaxcdPlxkd+M9R7e1IYk4yGHPOFOce3PXNUi7HGSeOnNG9vU/nQSXRAvbeM+q/p/WiqW9vU/nRQM/9k=",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTU0OTI0MDc2NjM2NDc2MTQ0In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"dash_info": {
								"is_dash_eligible": false,
								"video_dash_manifest": null,
								"number_of_qualities": 0
							},
							"has_audio": true,
							"video_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t50.2886-16/10000000_799702960960317_6658975651180254900_n.mp4?_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sWhPZXk5-mkAX9p4m3s&edm=APU89FABAAAA&ccb=7-4&oe=60DED9D5&oh=755aa6dfe8df6d5002a2655ce23b0bf7&_nc_sid=86f79a",
							"video_view_count": 1276937,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Charles and @Shaq agree: we can all help end this pandemic by getting the COVID-19 vaccine. It's the only way to keep everyone safe and help us get back to all the things we miss most—from seeing family and friends to watching sports in person."
										}
									}
								]
							},
							"shortcode": "CN06elAApLw",
							"edge_media_to_comment": {
								"count": 1648,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1618790800,
							"edge_media_preview_like": {
								"count": 107135,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.236.607.607a/174390000_4150568561661426_6939914991422996869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LAKzEji1MGwAX9rxvS1&edm=APU89FABAAAA&ccb=7-4&oh=172c891fcbe260f1636347414f7e4264&oe=60DECAB8&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p150x150/174390000_4150568561661426_6939914991422996869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LAKzEji1MGwAX9rxvS1&edm=APU89FABAAAA&ccb=7-4&oh=5e2b932c567e439d556d0d18a41af3be&oe=60DF332E&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 266
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p240x240/174390000_4150568561661426_6939914991422996869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LAKzEji1MGwAX9rxvS1&edm=APU89FABAAAA&ccb=7-4&oh=c338fa47bfb955af140dd76f332f2f97&oe=60DEF2A6&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 427
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p320x320/174390000_4150568561661426_6939914991422996869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LAKzEji1MGwAX9rxvS1&edm=APU89FABAAAA&ccb=7-4&oh=49b2661d5f6417370a9912ef7c3eee4e&oe=60DEE87B&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 569
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p480x480/174390000_4150568561661426_6939914991422996869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LAKzEji1MGwAX9rxvS1&edm=APU89FABAAAA&ccb=7-4&oh=962ef07c44dbe6ab46deba500b2c7bd6&oe=60DF21B9&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 854
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/174390000_4150568561661426_6939914991422996869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LAKzEji1MGwAX9rxvS1&edm=APU89FABAAAA&ccb=7-4&oh=dcffe735168bfb3d9e99c123976d7ba0&oe=60DEC581&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1138
								}
							],
							"coauthor_producers": [],
							"product_type": "igtv"
						}
					},
					{
						"node": {
							"__typename": "GraphVideo",
							"id": "2551735115571846175",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1138,
								"width": 640
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/172621985_123994273045823_460976426807869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DzvCuvY-vT0AX_6SN4J&edm=APU89FABAAAA&ccb=7-4&oh=278f7fd9d4fa7aecb6d43f6350b7f9e6&oe=60DF4A35&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/172621985_123994273045823_460976426807869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DzvCuvY-vT0AX_6SN4J&edm=APU89FABAAAA&ccb=7-4&oh=278f7fd9d4fa7aecb6d43f6350b7f9e6&oe=60DF4A35&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1138
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/172621985_123994273045823_460976426807869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DzvCuvY-vT0AX_6SN4J&edm=APU89FABAAAA&ccb=7-4&oh=278f7fd9d4fa7aecb6d43f6350b7f9e6&oe=60DF4A35&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 1334
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/172621985_123994273045823_460976426807869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DzvCuvY-vT0AX_6SN4J&edm=APU89FABAAAA&ccb=7-4&oh=278f7fd9d4fa7aecb6d43f6350b7f9e6&oe=60DF4A35&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1921
								}
							],
							"is_video": true,
							"media_preview": "ABcq2s0maqG4Ao84GkMt5oqmJwaKAMtXHc4Ht1oeQdVJx7/55qvFMituz0/zmrnnREZJXB9aSdxMrmT1zRT5FDDdGemOKKNRGd5SnkMg9eT+XTvQyA4O5QDjrk/nx+FQD72O2TSSUWGWCvPDr+v5dKKp96KYH//Z",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTUxNzM1MTE1NTcxODQ2MTc1In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"dash_info": {
								"is_dash_eligible": false,
								"video_dash_manifest": null,
								"number_of_qualities": 0
							},
							"has_audio": true,
							"video_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t50.2886-16/10000000_1124736174672250_161168974094726664_n.mp4?_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vx3MwJUqBL4AX_W1Xus&edm=APU89FABAAAA&ccb=7-4&oe=60DF58B1&oh=4fc70eb0ea4a34c51aca03ec4fba65da&_nc_sid=86f79a",
							"video_view_count": 684356,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Today, the City of Chicago starts prep work in Jackson Park, marking the beginning of the exciting road to groundbreaking for the Obama Presidential Center. \n \nMichelle and I hope that the Center will help lift up the South Side and surrounding communities by creating jobs and attracting new visitors—serving as a place where young people can take action and have some fun. Let’s get to work."
										}
									}
								]
							},
							"shortcode": "CNplZFkjNwf",
							"edge_media_to_comment": {
								"count": 1192,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1618411087,
							"edge_media_preview_like": {
								"count": 95687,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.236.607.607a/172621985_123994273045823_460976426807869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DzvCuvY-vT0AX_6SN4J&edm=APU89FABAAAA&ccb=7-4&oh=349685c5ef178a70b15c1f00cc1acd8d&oe=60DF478B&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p150x150/172621985_123994273045823_460976426807869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DzvCuvY-vT0AX_6SN4J&edm=APU89FABAAAA&ccb=7-4&oh=bc30bca38e4deb3a2ada26ce00d97898&oe=60DF0ED9&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 266
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p240x240/172621985_123994273045823_460976426807869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DzvCuvY-vT0AX_6SN4J&edm=APU89FABAAAA&ccb=7-4&oh=fe680344a7365eb50e99158a186d50ee&oe=60DEC9DC&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 427
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p320x320/172621985_123994273045823_460976426807869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DzvCuvY-vT0AX_6SN4J&edm=APU89FABAAAA&ccb=7-4&oh=1f8f0af492144872ebe0322b409f5c73&oe=60DEDB89&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 569
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p480x480/172621985_123994273045823_460976426807869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DzvCuvY-vT0AX_6SN4J&edm=APU89FABAAAA&ccb=7-4&oh=4b96b11edcab8f709e1800df3551cb00&oe=60DF4D34&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 854
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/172621985_123994273045823_460976426807869_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DzvCuvY-vT0AX_6SN4J&edm=APU89FABAAAA&ccb=7-4&oh=278f7fd9d4fa7aecb6d43f6350b7f9e6&oe=60DF4A35&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1138
								}
							],
							"coauthor_producers": [],
							"product_type": "igtv"
						}
					},
					{
						"node": {
							"__typename": "GraphImage",
							"id": "2551012885203659365",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1080,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/172182093_2788611564787471_3096369394860863279_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_h5cZY6fZ6kAX8IOBcx&edm=APU89FABAAAA&ccb=7-4&oh=31b46c2c25a1b8379d266e394284141c&oe=60E448B5&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/172182093_2788611564787471_3096369394860863279_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_h5cZY6fZ6kAX8IOBcx&edm=APU89FABAAAA&ccb=7-4&oh=101ae778175c1455a9e03dbd8c3d0403&oe=60E314AE&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/172182093_2788611564787471_3096369394860863279_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_h5cZY6fZ6kAX8IOBcx&edm=APU89FABAAAA&ccb=7-4&oh=432c82ffdb45c7d583ca13688b36a4bd&oe=60E37D55&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 750
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/172182093_2788611564787471_3096369394860863279_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_h5cZY6fZ6kAX8IOBcx&edm=APU89FABAAAA&ccb=7-4&oh=31b46c2c25a1b8379d266e394284141c&oe=60E448B5&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1080
								}
							],
							"is_video": false,
							"media_preview": "ACoqnsbSGSEM67mJbnJHQ+1WvsNv/c/8eam6d/x7r9W9fWrv+e9U27vUhJWWhU+w239z/wAeb/Gj7Bb/ANz/AMearff/APXRj/PNK77lWXZFdtNt9hbZ2J+83+NcuK7Ij5W5zwfX09zXGCtIO9zKatax0mm4+zrn1b09fer4Kjtn8qz9O/491+rfzq7/AJ/zxWb3ZqtkSbk/u/yo3J6fypn+f88Un+f88UhkjEFGwMcHnj0rixXZ5JRs+h/l9BXGCtYdTKfQ6PTSPIXkDlup9/rV3PuP++v/AK9chSYpuN9RKdlax1+73H/fX/16M+4/76/+vXIYoxS5B852RZQhGR0Pf2+tcaKMUtUlYiT5j//Z",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTUxMDEyODg1MjAzNjU5MzY1In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Our hearts are heavy over yet another shooting of a Black man, Daunte Wright, at the hands of police. It’s important to conduct a full and transparent investigation, but this is also a reminder of just how badly we need to reimagine policing and public safety in this country. You can find resources and ways to help here: obama.org/anguish-and-action"
										}
									}
								]
							},
							"shortcode": "CNnBLQIAipl",
							"edge_media_to_comment": {
								"count": 3779,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1618324455,
							"edge_media_preview_like": {
								"count": 437065,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/172182093_2788611564787471_3096369394860863279_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_h5cZY6fZ6kAX8IOBcx&edm=APU89FABAAAA&ccb=7-4&oh=101ae778175c1455a9e03dbd8c3d0403&oe=60E314AE&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/172182093_2788611564787471_3096369394860863279_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_h5cZY6fZ6kAX8IOBcx&edm=APU89FABAAAA&ccb=7-4&oh=e0c7327ca8fab4854c06d1a232925a44&oe=60E34299&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/172182093_2788611564787471_3096369394860863279_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_h5cZY6fZ6kAX8IOBcx&edm=APU89FABAAAA&ccb=7-4&oh=bafdc592020a58a77ef3b3e01263a9f0&oe=60E41051&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/172182093_2788611564787471_3096369394860863279_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_h5cZY6fZ6kAX8IOBcx&edm=APU89FABAAAA&ccb=7-4&oh=a1e0d15eef61d25bc2f2987def1226c0&oe=60E39F50&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/172182093_2788611564787471_3096369394860863279_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_h5cZY6fZ6kAX8IOBcx&edm=APU89FABAAAA&ccb=7-4&oh=1d85d814b0ef29aed33b508a2b5cf203&oe=60E42D8E&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/172182093_2788611564787471_3096369394860863279_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_h5cZY6fZ6kAX8IOBcx&edm=APU89FABAAAA&ccb=7-4&oh=101ae778175c1455a9e03dbd8c3d0403&oe=60E314AE&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": []
						}
					},
					{
						"node": {
							"__typename": "GraphImage",
							"id": "2548165067283740632",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1281,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/169731260_3854880117893986_8915504311816769644_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=65se9ByG40kAX-1GslF&edm=APU89FABAAAA&ccb=7-4&oh=31e598adb4a20a22f25d2b51cb8d0d39&oe=60E3BDD6&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/169731260_3854880117893986_8915504311816769644_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=65se9ByG40kAX-1GslF&edm=APU89FABAAAA&ccb=7-4&oh=9072f2021a1147a092f3e9817fd7c23f&oe=60E43C9A&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 759
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/169731260_3854880117893986_8915504311816769644_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=65se9ByG40kAX-1GslF&edm=APU89FABAAAA&ccb=7-4&oh=636f901de2e1148c27b873d8b31ab7b3&oe=60E2F5E1&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 889
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/169731260_3854880117893986_8915504311816769644_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=65se9ByG40kAX-1GslF&edm=APU89FABAAAA&ccb=7-4&oh=31e598adb4a20a22f25d2b51cb8d0d39&oe=60E3BDD6&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1281
								}
							],
							"is_video": false,
							"media_preview": "ACQqsyDe+D0Ufz5qWHoV64/rUM8Hn/dOCowecce/+FVRdRRDaGOYyCx9QeMD1xxn9KmxRot2pMdayp7w+apUkIoXjscnnP0H4g1oNMBwMFj0HcigLEpFFMWRZAGQhh6iikBWt/8AVBx1cMSfbOP6Vh3a+XIwHfn8/wD69bMMgccfwll6YxzuA/X9Kx745k+nB/z+NakggLLQbgu2/oQAOKEBb2z6/wBaY6gEYAGfTOPpz3oNJPRGlaTLHHgnkkmioYrcSIG2g8dc0VnYks6iz28+UOFk+Zh7jqfxrPmRpHLKOG5x7Cr+sHlT3yR+grLWqbBK5ZEL5BCj3yaWS3dunb61GpNKWJ6k0ttTRLmdti7bXCQxhJAdy+nP9aKo0UXZ0exj5n//2Q==",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTQ4MTY1MDY3MjgzNzQwNjMyIn0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "When we first met His Royal Highness Prince Philip, Duke of Edinburgh, he and Her Majesty Queen Elizabeth II had already been on the world stage for more than half a century — welcoming leaders like Churchill and Kennedy; Mandela and Gorbachev. As two Americans unaccustomed to palaces and pomp, we didn’t know what to expect.\n \nWe shouldn’t have worried. The Queen and Prince Philip immediately put us at ease with their grace and generosity, turning a ceremonial occasion into something far more natural, even comfortable. Prince Philip in particular was kind and warm, with a sharp wit and unfailing good humor. It was our first introduction to the man behind the title, and in the years since, our admiration for him has only grown. We will miss him dearly.\n \nLike the Queen, Prince Philip saw world wars and economic crises come and go. The radio gave way to the television, and the television to the internet. And through it all, he helped provide steady leadership and guiding wisdom. It has long been said that the United States and Great Britain have a special relationship — one that has been maintained and strengthened not just by presidents and prime ministers but by the Royal Family that has outlasted them all.\n \nAt the Queen’s side or trailing the customary two steps behind, Prince Philip showed the world what it meant to be a supportive husband to a powerful woman. Yet he also found a way to lead without demanding the spotlight — serving in combat in World War II, commanding a frigate in the Royal Navy, and tirelessly touring the world to champion British industry and excellence. Through his extraordinary example, he proved that true partnership has room for both ambition and selflessness — all in service of something greater. \n \nAs the world mourns his loss, we send our warmest wishes and deepest sympathies to the Queen, their children, grandchildren, and great-grandchildren; and everyone who knew and loved this remarkable man."
										}
									}
								]
							},
							"shortcode": "CNc5qDAgbfY",
							"edge_media_to_comment": {
								"count": 17671,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1617984969,
							"edge_media_preview_like": {
								"count": 2149406,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.134.1440.1440a/s640x640/169731260_3854880117893986_8915504311816769644_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=65se9ByG40kAX-1GslF&edm=APU89FABAAAA&ccb=7-4&oh=e038db94b8d4e63b97812ee08bbb7a42&oe=60E3BC35&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.134.1440.1440a/s150x150/169731260_3854880117893986_8915504311816769644_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=65se9ByG40kAX-1GslF&edm=APU89FABAAAA&ccb=7-4&oh=3ad5ad97c9095d456cd7638fe742ecee&oe=60E328DC&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.134.1440.1440a/s240x240/169731260_3854880117893986_8915504311816769644_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=65se9ByG40kAX-1GslF&edm=APU89FABAAAA&ccb=7-4&oh=c6ebf70dbe266a2175ff596e5712c56b&oe=60E31C94&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.134.1440.1440a/s320x320/169731260_3854880117893986_8915504311816769644_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=65se9ByG40kAX-1GslF&edm=APU89FABAAAA&ccb=7-4&oh=aaa173e7865a210abfc07df09ed22705&oe=60E33B0D&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.134.1440.1440a/s480x480/169731260_3854880117893986_8915504311816769644_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=65se9ByG40kAX-1GslF&edm=APU89FABAAAA&ccb=7-4&oh=0468c51b7857703a09c425e42362a0da&oe=60E4814F&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.134.1440.1440a/s640x640/169731260_3854880117893986_8915504311816769644_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=65se9ByG40kAX-1GslF&edm=APU89FABAAAA&ccb=7-4&oh=e038db94b8d4e63b97812ee08bbb7a42&oe=60E3BC35&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": []
						}
					},
					{
						"node": {
							"__typename": "GraphImage",
							"id": "2545409291829957307",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 836,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/169200361_2597357397234430_2641331582545607487_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1tfGtJHF-IAX-UmkXK&edm=APU89FABAAAA&ccb=7-4&oh=e524f865443dd2ffcfd8eac771eed0ea&oe=60E3D236&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/169200361_2597357397234430_2641331582545607487_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1tfGtJHF-IAX-UmkXK&edm=APU89FABAAAA&ccb=7-4&oh=6b530e23f54636caecf22670ecd2ac26&oe=60E3991D&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 495
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/169200361_2597357397234430_2641331582545607487_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1tfGtJHF-IAX-UmkXK&edm=APU89FABAAAA&ccb=7-4&oh=4d8ff9ee22424059feb12d90903ebd1d&oe=60E30326&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 580
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/169200361_2597357397234430_2641331582545607487_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1tfGtJHF-IAX-UmkXK&edm=APU89FABAAAA&ccb=7-4&oh=e524f865443dd2ffcfd8eac771eed0ea&oe=60E3D236&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 836
								}
							],
							"is_video": false,
							"media_preview": "ACogfLP5flsMZzuHH4f596mFxukJJBLKByPQmsxbkow38ADHT3zzU8E6qeckY6LjgZJ/r+HSlzXewvZ2jZPv/mUj8pZh1GMfWlZGY5OMYz6f5z+tWMRdt2Tg9v59BTT5bnLHGOo28DH4nn0NZ9TUAwRQvUkAduP8mrZjiHGT+dSRCELuAGMY9SfXNZhRc8ZxWidulzJxXe3f1Lku1iTgfiCc1Sx5cpxwrD6Yz6emDWp5g9qhkUuc8/kajmNOUZvMQYsA4GO35fj+NQtEZDuGFDckAVYMZZSCPvdzxQIGOACCB05J/kKd1cLMqxqQMBtoJ6HIBx9a1hZp35qOJHAIIyffp+vb3FWwz/5xUNjP/9k=",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTQ1NDA5MjkxODI5OTU3MzA3In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Bruce and I closed out our podcast, Renegades: Born in the USA, back where it all began: with a conversation about what it will take to restore faith in America’s promise, and how to tell a new, unifying story about this country that is true to our ideals and honest about where we fall short. It’s not easy to do in these cynical times, but we both believe that story exists—and that folks across the country are hungry for it. Along the way, I tell Bruce about an unlikely gift that a stranger gave me on the campaign trail in Greenwood, South Carolina, and he explains the story behind one of his most popular and misunderstood songs. Listen to our final episode on Spotify."
										}
									}
								]
							},
							"shortcode": "CNTHEPHgNK7",
							"edge_media_to_comment": {
								"count": 2454,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1617656455,
							"edge_media_preview_like": {
								"count": 368999,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c162.0.1115.1115a/s640x640/169200361_2597357397234430_2641331582545607487_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1tfGtJHF-IAX-UmkXK&edm=APU89FABAAAA&ccb=7-4&oh=31ef30011d5da335fdacfb77f1c6c97c&oe=60E3ACC8&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c162.0.1115.1115a/s150x150/169200361_2597357397234430_2641331582545607487_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1tfGtJHF-IAX-UmkXK&edm=APU89FABAAAA&ccb=7-4&oh=f4d0853e254fd5e52045349e329f6b92&oe=60E317A9&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c162.0.1115.1115a/s240x240/169200361_2597357397234430_2641331582545607487_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1tfGtJHF-IAX-UmkXK&edm=APU89FABAAAA&ccb=7-4&oh=776d2f9a602c0d8a0a08551bea8c5cb2&oe=60E44B61&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c162.0.1115.1115a/s320x320/169200361_2597357397234430_2641331582545607487_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1tfGtJHF-IAX-UmkXK&edm=APU89FABAAAA&ccb=7-4&oh=d2e952241c9e0a94674aa4681229e9c0&oe=60E390C0&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c162.0.1115.1115a/s480x480/169200361_2597357397234430_2641331582545607487_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1tfGtJHF-IAX-UmkXK&edm=APU89FABAAAA&ccb=7-4&oh=52d65f5731372cdf1d5e9ea0ca7cf6d1&oe=60E2EBBE&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c162.0.1115.1115a/s640x640/169200361_2597357397234430_2641331582545607487_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=e1tfGtJHF-IAX-UmkXK&edm=APU89FABAAAA&ccb=7-4&oh=31ef30011d5da335fdacfb77f1c6c97c&oe=60E3ACC8&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": []
						}
					},
					{
						"node": {
							"__typename": "GraphImage",
							"id": "2544488446278470322",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1080,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/168577287_856474521879639_9209167300607744608_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=u3APUrok9MQAX8Eeo23&edm=APU89FABAAAA&ccb=7-4&oh=0dea06311754fa6ca1a440cba3d25594&oe=60E2B01C&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/168577287_856474521879639_9209167300607744608_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=u3APUrok9MQAX8Eeo23&edm=APU89FABAAAA&ccb=7-4&oh=d933e1bc6fe620b6a2c8ac214199cfcc&oe=60E3A9A2&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/168577287_856474521879639_9209167300607744608_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=u3APUrok9MQAX8Eeo23&edm=APU89FABAAAA&ccb=7-4&oh=c796c56a97c8ae1c40c82435e890a3e8&oe=60E44326&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 750
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/168577287_856474521879639_9209167300607744608_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=u3APUrok9MQAX8Eeo23&edm=APU89FABAAAA&ccb=7-4&oh=0dea06311754fa6ca1a440cba3d25594&oe=60E2B01C&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1080
								}
							],
							"is_video": false,
							"media_preview": "ACoqgV2AwCQKbJKyKWJJ/HFXoZ1CdPu8H/P41mXc7SKGPzJnPTG36H6euetZlodBchztOQcZ55qS4XYgfPJ5K49feqagyTAoCQOp/D/PFWLxio2nJxjcQcgcdPTODQBXkOenNVs1aaI7PMX5l9R/UVUqhHQpau8ZiBA7s3bOMAD29/xrOlt5vLEZGSOhHp9fStHLwxEjO+VhtHcAf48/hUhuWY7CpUnjJ/nUrXcexWjUwxbSBnvj2qpBbyujHbuViSvIx6dMj8CauSQBk2rJy3QsP046HNStcG0RQRuHTjIHTH5/XrRp1DXpuZ9vbSRZSUbVbpz+FZTZUlT24ramvBIBkHO76H8vTmqDrKzEhTgknoK00exCvfU1p7zzXMYBYqeCOo//AFf5zWZdTyLJluCOQat6X/rJP89zTtRAJJ75H8qT01GuxF5okXI+6/8A463p+Pb8KQajsXawyw4wen41Wg6SDttz+Oev1qG5/wBaalblskEueQOP0H4/0FQmb/OP/r1G5OcdqbVkWP/Z",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTQ0NDg4NDQ2Mjc4NDcwMzIyIn0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "This Easter, I hope we can all take some time to reflect on the blessings we enjoy and the hope we have for a brighter future. From our family to yours, have a safe and happy Easter."
										}
									}
								]
							},
							"shortcode": "CNP1sK3g4qy",
							"edge_media_to_comment": {
								"count": 8987,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1617546681,
							"edge_media_preview_like": {
								"count": 1202444,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/168577287_856474521879639_9209167300607744608_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=u3APUrok9MQAX8Eeo23&edm=APU89FABAAAA&ccb=7-4&oh=d933e1bc6fe620b6a2c8ac214199cfcc&oe=60E3A9A2&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/168577287_856474521879639_9209167300607744608_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=u3APUrok9MQAX8Eeo23&edm=APU89FABAAAA&ccb=7-4&oh=c3ea8a612903ee960b0d30565f0f7b49&oe=60E3F5A5&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/168577287_856474521879639_9209167300607744608_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=u3APUrok9MQAX8Eeo23&edm=APU89FABAAAA&ccb=7-4&oh=418e1370524051493cafe5ea1166c841&oe=60E2CC23&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/168577287_856474521879639_9209167300607744608_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=u3APUrok9MQAX8Eeo23&edm=APU89FABAAAA&ccb=7-4&oh=07856ea42585f51a9fb2fc21550848a3&oe=60E34FDD&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/168577287_856474521879639_9209167300607744608_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=u3APUrok9MQAX8Eeo23&edm=APU89FABAAAA&ccb=7-4&oh=ea47fd2a9b1eedff2ed1fa6d2f2935dd&oe=60E32CDC&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/168577287_856474521879639_9209167300607744608_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=u3APUrok9MQAX8Eeo23&edm=APU89FABAAAA&ccb=7-4&oh=d933e1bc6fe620b6a2c8ac214199cfcc&oe=60E3A9A2&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": []
						}
					},
					{
						"node": {
							"__typename": "GraphVideo",
							"id": "2543079803741807186",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 849,
								"width": 480
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/167157451_2776719309246293_4916222496628529992_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ItK4Nw9lGNEAX97Izz4&edm=APU89FABAAAA&ccb=7-4&oh=c11e77c7ef81e9371d2791c1c46173f8&oe=60DEC93A&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/167157451_2776719309246293_4916222496628529992_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ItK4Nw9lGNEAX97Izz4&edm=APU89FABAAAA&ccb=7-4&oh=c11e77c7ef81e9371d2791c1c46173f8&oe=60DEC93A&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1132
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/167157451_2776719309246293_4916222496628529992_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ItK4Nw9lGNEAX97Izz4&edm=APU89FABAAAA&ccb=7-4&oh=c11e77c7ef81e9371d2791c1c46173f8&oe=60DEC93A&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 1327
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/167157451_2776719309246293_4916222496628529992_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ItK4Nw9lGNEAX97Izz4&edm=APU89FABAAAA&ccb=7-4&oh=c11e77c7ef81e9371d2791c1c46173f8&oe=60DEC93A&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1911
								}
							],
							"is_video": true,
							"media_preview": "ABcqofYZCN2AAOuaVbB3AIIweR61uGNZQFboCD+X9KoI+9X3Absk8nkDPTGO3QCouUlcoJpzSEhSDt6+n4HNFdFCgRAAMDHT/GimIpWsk02SNoUcZOTz7AU1IZDIzycAkZwP5eo/XvT4SLfZFnkqfxOev6mre/tVWC5FJO69AG/Siq88gVgPXNFFgMqS63yB+wGMfj2qUaiUz8oIPvWXUicmmI0J5fOwy5GOme+fWiq9FTcZ/9k=",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTQzMDc5ODAzNzQxODA3MTg2In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"dash_info": {
								"is_dash_eligible": false,
								"video_dash_manifest": null,
								"number_of_qualities": 0
							},
							"has_audio": true,
							"video_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t50.2886-16/10000000_471107717646138_717858979148513258_n.mp4?_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=eU9NJdMmOXUAX8_24JA&edm=APU89FABAAAA&ccb=7-4&oe=60DED936&oh=1cef8ed7987be24aac8f6babdb928d88&_nc_sid=86f79a",
							"video_view_count": 1140220,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Bruce @Springsteen and I asked each other a lot of questions on our podcast, Renegades: Born in the USA. But we also wanted to answer some of yours. We got some great ones about music, fatherhood, masculinity, and race. You can check out my answers here."
										}
									}
								]
							},
							"shortcode": "CNK1ZuRgCJS",
							"edge_media_to_comment": {
								"count": 1548,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1617379457,
							"edge_media_preview_like": {
								"count": 131051,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.137.357.357a/167157451_2776719309246293_4916222496628529992_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ItK4Nw9lGNEAX97Izz4&edm=APU89FABAAAA&ccb=7-4&oh=c8429ebc026fc91fc939e9426324df8f&oe=60DEFE76&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p150x150/167157451_2776719309246293_4916222496628529992_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ItK4Nw9lGNEAX97Izz4&edm=APU89FABAAAA&ccb=7-4&oh=b4b859304ce7d6e097e8df313a4c0df1&oe=60DF5C15&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 265
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p240x240/167157451_2776719309246293_4916222496628529992_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ItK4Nw9lGNEAX97Izz4&edm=APU89FABAAAA&ccb=7-4&oh=534115d49312f579e8360aa2bd642420&oe=60DEE21D&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 424
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p320x320/167157451_2776719309246293_4916222496628529992_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ItK4Nw9lGNEAX97Izz4&edm=APU89FABAAAA&ccb=7-4&oh=b35668bf0270799e02330508138627f7&oe=60DF4344&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 566
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/167157451_2776719309246293_4916222496628529992_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ItK4Nw9lGNEAX97Izz4&edm=APU89FABAAAA&ccb=7-4&oh=c11e77c7ef81e9371d2791c1c46173f8&oe=60DEC93A&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 849
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/167157451_2776719309246293_4916222496628529992_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ItK4Nw9lGNEAX97Izz4&edm=APU89FABAAAA&ccb=7-4&oh=c11e77c7ef81e9371d2791c1c46173f8&oe=60DEC93A&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1132
								}
							],
							"coauthor_producers": [],
							"product_type": "igtv"
						}
					},
					{
						"node": {
							"__typename": "GraphVideo",
							"id": "2541027552991001372",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1921,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/165982387_269975268083218_6730309753555350012_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dR4aXgLHqGMAX8IZphu&edm=APU89FABAAAA&ccb=7-4&oh=6a9176f9594da171d2c1c8c553a97bef&oe=60DEBF59&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/165982387_269975268083218_6730309753555350012_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dR4aXgLHqGMAX8IZphu&edm=APU89FABAAAA&ccb=7-4&oh=933635c646fcffca0d868278d418e308&oe=60DEDB5E&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1138
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/165982387_269975268083218_6730309753555350012_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dR4aXgLHqGMAX8IZphu&edm=APU89FABAAAA&ccb=7-4&oh=3e94194b9b6f41c504082225888e0de4&oe=60DED51A&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 1334
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/165982387_269975268083218_6730309753555350012_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dR4aXgLHqGMAX8IZphu&edm=APU89FABAAAA&ccb=7-4&oh=6a9176f9594da171d2c1c8c553a97bef&oe=60DEBF59&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1921
								}
							],
							"is_video": true,
							"media_preview": "ABcq5qiujMux3GM8E9B/hUMjqkSyLjeDuzjk56j0pXKUb38jCorpQ7bvvNk+w/wxRTJBoXli64B7/p0phgV4/KBAK8E//W7e9IbwRxHAyA2Bzx06H6fSmB2SIXPB3tjbzgdc/wAqizNea2hbExtowD8+3j0z/OiqxkE6Z7envRTuK19TCaVmGCeKka6kaMRE/IpyBgfz696r0VRmSpO6cKeD7CioqKB3P//Z",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTQxMDI3NTUyOTkxMDAxMzcyIn0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"dash_info": {
								"is_dash_eligible": false,
								"video_dash_manifest": null,
								"number_of_qualities": 0
							},
							"has_audio": true,
							"video_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t50.16885-16/167697772_793731298186565_4559773287986621501_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5pZ3R2LmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=onIa2Y0wRm0AX_kaFle&edm=APU89FABAAAA&vs=17905213795734817_3998395678&_nc_vs=HBksFQAYJEdHemQtZ2xGVlJQNDVORUNBRDNzd1k2bGtVYy1idlZCQUFBRhUAAsgBABUAGCRHQWlPOUFuVzc4NDNCdXNDQUFfaUxoUmZmWlU4YnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbC75jlyKzOPxUCKAJDMywXQHEsQYk3S8cYEmRhc2hfYmFzZWxpbmVfMl92MREAdewHAA%3D%3D&ccb=7-4&oe=60DED3D6&oh=62085ec0c3bbeb6a3778ff4a43855c39&_nc_sid=86f79a",
							"video_view_count": 951775,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "It’s always great catching up with @IsabelWilkerson, and this time we’re talking about A Promised Land and our mutual love of books with @BarnesandNoble. Take a look:"
										}
									}
								]
							},
							"shortcode": "CNDixi0gjsc",
							"edge_media_to_comment": {
								"count": 1293,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1617134174,
							"edge_media_preview_like": {
								"count": 129544,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.428.1100.1100a/s640x640/165982387_269975268083218_6730309753555350012_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dR4aXgLHqGMAX8IZphu&edm=APU89FABAAAA&ccb=7-4&oh=7e6733c8cdaf333deb52aeb1c21095f6&oe=60DEC3D7&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p150x150/165982387_269975268083218_6730309753555350012_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dR4aXgLHqGMAX8IZphu&edm=APU89FABAAAA&ccb=7-4&oh=e25b6aa2229ea0b2c3c6d3ec98ff50f1&oe=60DF1819&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 266
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p240x240/165982387_269975268083218_6730309753555350012_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dR4aXgLHqGMAX8IZphu&edm=APU89FABAAAA&ccb=7-4&oh=298cf6a75c533cb8b4fc9d816f7b40be&oe=60DF411F&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 426
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p320x320/165982387_269975268083218_6730309753555350012_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dR4aXgLHqGMAX8IZphu&edm=APU89FABAAAA&ccb=7-4&oh=7f42749accf5300e00ec2a91cb3a101b&oe=60DF05A1&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 569
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p480x480/165982387_269975268083218_6730309753555350012_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dR4aXgLHqGMAX8IZphu&edm=APU89FABAAAA&ccb=7-4&oh=1708cb613850e44b219050a21dd3b14d&oe=60DED4E8&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 853
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/165982387_269975268083218_6730309753555350012_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dR4aXgLHqGMAX8IZphu&edm=APU89FABAAAA&ccb=7-4&oh=933635c646fcffca0d868278d418e308&oe=60DEDB5E&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 1138
								}
							],
							"coauthor_producers": [],
							"product_type": "igtv"
						}
					},
					{
						"node": {
							"__typename": "GraphImage",
							"id": "2540883138289308084",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 1350,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/165947972_937645520399022_6180833118325036945_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m-WXdsJKL7UAX9jgiFe&edm=APU89FABAAAA&ccb=7-4&oh=3f4d92292e40609117849b02c3a3d9e2&oe=60E48CBD&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/165947972_937645520399022_6180833118325036945_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m-WXdsJKL7UAX9jgiFe&edm=APU89FABAAAA&ccb=7-4&oh=738a8b7dffc3dcdded2f34073ef614d3&oe=60E40F3A&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 800
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/165947972_937645520399022_6180833118325036945_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m-WXdsJKL7UAX9jgiFe&edm=APU89FABAAAA&ccb=7-4&oh=92c69b75b71353ca97bd5f1776384a66&oe=60E3387E&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 937
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/165947972_937645520399022_6180833118325036945_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m-WXdsJKL7UAX9jgiFe&edm=APU89FABAAAA&ccb=7-4&oh=3f4d92292e40609117849b02c3a3d9e2&oe=60E48CBD&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1350
								}
							],
							"is_video": false,
							"media_preview": "ACEq1NuV/P8AlWTO3lMegA7mtlR8o/z2rnbubDseQdwG1x26ZA6e4PvQ0CLts/mtnjGD0Fao/hHuaxBcJFKmCArD5vrkjPt0rZjkSQAoQ2CelMReooooAp7gq5P8J5/LoKwLkR3LDzWKOvythSwIBypBHQ4OMGteRwQdv0rFnj/fqP7xH6jH9Ke4bFGEjdwcjOORng9OPy+ldNZhATtGDxuPcnHUjp+Vc9a2xMpjbhlz19iMVfsLqTc7sBwQGAGPXke9A+h1NFUPtaf3x+dFIRnGSqUh3Tq2OEGfx5q0Kc/QUIZTibdM8nXoOPoP8KW3jIlkIyFbB6evX9avKABxxSr1piIvJ/ziip8milcdj//Z",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTQwODgzMTM4Mjg5MzA4MDg0In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Bruce @Springsteen and I agree that our most important anchor over the years has been our families. We’re both lucky enough to have strong, independent, partners who challenge and ground us—ultimately helping us become better versions of ourselves. Michelle and Patti have also given us the single greatest gift of our lives: the chance to become fathers. In the latest episode of Renegades: Born in the USA, Bruce and I trade notes on what our wives and kids continue to teach us, the values we want to pass on, the examples we try to set, and the world we want to leave them. Listen to our latest conversation on Spotify."
										}
									}
								]
							},
							"shortcode": "CNDB8CJg5G0",
							"edge_media_to_comment": {
								"count": 5165,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1617116895,
							"edge_media_preview_like": {
								"count": 1357428,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/165947972_937645520399022_6180833118325036945_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m-WXdsJKL7UAX9jgiFe&edm=APU89FABAAAA&ccb=7-4&oh=fc68b9f28df3a15888ceed0b6983fc93&oe=60E33219&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s150x150/165947972_937645520399022_6180833118325036945_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m-WXdsJKL7UAX9jgiFe&edm=APU89FABAAAA&ccb=7-4&oh=b38b66fa8e2ddcc4803f0b9334026c44&oe=60E3A4A9&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s240x240/165947972_937645520399022_6180833118325036945_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m-WXdsJKL7UAX9jgiFe&edm=APU89FABAAAA&ccb=7-4&oh=c48be512d3ab1c8f33f2daca8dc4d42d&oe=60E49DAF&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s320x320/165947972_937645520399022_6180833118325036945_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m-WXdsJKL7UAX9jgiFe&edm=APU89FABAAAA&ccb=7-4&oh=3103b84b3613d02adc4f6beaf4ab815f&oe=60E3B951&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/165947972_937645520399022_6180833118325036945_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m-WXdsJKL7UAX9jgiFe&edm=APU89FABAAAA&ccb=7-4&oh=61ceaab81ea8aa70b4ce6ddd477cb5d7&oe=60E49998&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/165947972_937645520399022_6180833118325036945_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m-WXdsJKL7UAX9jgiFe&edm=APU89FABAAAA&ccb=7-4&oh=fc68b9f28df3a15888ceed0b6983fc93&oe=60E33219&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": []
						}
					},
					{
						"node": {
							"__typename": "GraphImage",
							"id": "2540113456896503598",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 640,
								"width": 640
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/165689418_255675532897712_1678609043431701547_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O4FsDS_CDQQAX_UTb2m&edm=APU89FABAAAA&ccb=7-4&oh=2e7449f52c0022e0cd14ab5a5eb7b768&oe=60E43575&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/165689418_255675532897712_1678609043431701547_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O4FsDS_CDQQAX_UTb2m&edm=APU89FABAAAA&ccb=7-4&oh=2e7449f52c0022e0cd14ab5a5eb7b768&oe=60E43575&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/165689418_255675532897712_1678609043431701547_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O4FsDS_CDQQAX_UTb2m&edm=APU89FABAAAA&ccb=7-4&oh=2e7449f52c0022e0cd14ab5a5eb7b768&oe=60E43575&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 750
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/165689418_255675532897712_1678609043431701547_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O4FsDS_CDQQAX_UTb2m&edm=APU89FABAAAA&ccb=7-4&oh=2e7449f52c0022e0cd14ab5a5eb7b768&oe=60E43575&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 1080
								}
							],
							"is_video": false,
							"media_preview": "ACoq0UncMWJ4Pb/PSmu7MQT19v8APNNDA8YwT6+w9KGUlcjhsf8A6657sLdCK5hN4vJOMY44Ax1OOpPYDOKwLm1EbAJuxj+LGc98Y7ema6OEtvZM5Tg/Ny2T1GePqOM1Xdo2YxlPn5+bPPH6Y7ValYpR1sznxATTvs5rZMQFM8qp9pc15EbbvtXcBnGOnNVJkdGO5gMjIHPTvzjH+FW3+UZPAHP5ev8AOqV9taRN5+VgeP73tnoMjFStUOL5X9//AACEEJHlSHXJG7PAOBwSeT9cY56imh4871ILtxnqc1NLEYk3IFC8/LjjPGPbAGST3PtVUSiQbiflY4yo4yOvHHy+p6n6VpGfL0ujGcVPXZ+XYsBlbOOcHH4il4qHTiGZtuGVSBtzwOeWGe3cDv8AhWz5Y/uj8hUOLk29rlqSikuxDOnmIVPOap3FvISi79+wqxBxgEemB+WTWk3PBpqqFGAAB7VOwyqQVU7ck55zzuz39B9OmKw7iGRm2INkY6dQD36d/wAq6U1G1HNZ3C19CtawhQD3XGcDbuODnOAM4z6DpV/C+lRQfdP1qMsc9TW61SbMnoz/2Q==",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTQwMTEzNDU2ODk2NTAzNTk4In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": []
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "My family and I are mourning the loss of our beloved grandmother, Sarah Ogwel Onyango Obama, affectionately known to many as “Mama Sarah” but known to us as “Dani” or Granny. Born in the first quarter of the last century, in Nyanza Province, on the shores of Lake Victoria, she had no formal schooling, and in the ways of her tribe, she was married off to a much older man while only a teen. She would spend the rest of her life in the tiny village of Alego, in a small home built of mud-and thatch brick and without electricity or indoor plumbing. There she raised eight children, tended to her goats and chickens, grew an assortment of crops, and took what the family didn’t use to sell at the local open-air market.\n \nAlthough not his birth mother, Granny would raise my father as her own, and it was in part thanks to her love and encouragement that he was able to defy the odds and do well enough in school to get a scholarship to attend an American university. When our family had difficulties, her homestead was a refuge for her children and grandchildren, and her presence was a constant, stabilizing force. When I first traveled to Kenya to learn more about my heritage and father, who had passed away by then, it was Granny who served as a bridge to the past, and it was her stories that helped fill a void in my heart.\n\nDuring the course of her life, Granny would witness epochal changes taking place around the globe: world war, liberation movements, moon landings, and the advent of the computer age. She would live to fly on jets, receive visitors from around the world, and see one of her grandsons get elected to the United States presidency. And yet her essential spirit—strong, proud, hard-working, unimpressed with conventional marks of status and full of common sense and good humor—never changed.\n\nWe will miss her dearly, but celebrate with gratitude her long and remarkable life."
										}
									}
								]
							},
							"shortcode": "CNAS7sfgW8u",
							"edge_media_to_comment": {
								"count": 71010,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1617025142,
							"edge_media_preview_like": {
								"count": 3555902,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/165689418_255675532897712_1678609043431701547_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O4FsDS_CDQQAX_UTb2m&edm=APU89FABAAAA&ccb=7-4&oh=2e7449f52c0022e0cd14ab5a5eb7b768&oe=60E43575&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/165689418_255675532897712_1678609043431701547_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O4FsDS_CDQQAX_UTb2m&edm=APU89FABAAAA&ccb=7-4&oh=f2f9f7bb678a059e76bb0aa925aae763&oe=60E4644C&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/165689418_255675532897712_1678609043431701547_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O4FsDS_CDQQAX_UTb2m&edm=APU89FABAAAA&ccb=7-4&oh=509a40a4e77c9d623b258cadc5d337e7&oe=60E3688E&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/165689418_255675532897712_1678609043431701547_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O4FsDS_CDQQAX_UTb2m&edm=APU89FABAAAA&ccb=7-4&oh=5c37454b6fd9d7ab9f6b1d6b17048053&oe=60E42634&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/165689418_255675532897712_1678609043431701547_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O4FsDS_CDQQAX_UTb2m&edm=APU89FABAAAA&ccb=7-4&oh=2a898383a9b304fed95ccf44e0ac6b14&oe=60E33C75&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/165689418_255675532897712_1678609043431701547_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O4FsDS_CDQQAX_UTb2m&edm=APU89FABAAAA&ccb=7-4&oh=2e7449f52c0022e0cd14ab5a5eb7b768&oe=60E43575&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": []
						}
					},
					{
						"node": {
							"__typename": "GraphImage",
							"id": "2536576097856860804",
							"gating_info": null,
							"fact_check_overall_rating": null,
							"fact_check_information": null,
							"media_overlay_info": null,
							"sensitivity_friction_info": null,
							"sharing_friction_info": {
								"should_have_sharing_friction": false,
								"bloks_app_url": null
							},
							"dimensions": {
								"height": 834,
								"width": 1080
							},
							"display_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/164682770_884476722127044_1805233131296817338_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fEiP8j-KBooAX-Bh_yD&edm=APU89FABAAAA&ccb=7-4&oh=81b7484b7e9f6c73a244e5f08e74bdba&oe=60E3D50F&_nc_sid=86f79a",
							"display_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/164682770_884476722127044_1805233131296817338_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fEiP8j-KBooAX-Bh_yD&edm=APU89FABAAAA&ccb=7-4&oh=0497e89516657b2a83855a673e88fb35&oe=60E37E8B&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 494
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/164682770_884476722127044_1805233131296817338_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fEiP8j-KBooAX-Bh_yD&edm=APU89FABAAAA&ccb=7-4&oh=e498aa25f8cc5b05756f7bfc5d4551b2&oe=60E4074F&_nc_sid=86f79a",
									"config_width": 750,
									"config_height": 579
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/164682770_884476722127044_1805233131296817338_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fEiP8j-KBooAX-Bh_yD&edm=APU89FABAAAA&ccb=7-4&oh=81b7484b7e9f6c73a244e5f08e74bdba&oe=60E3D50F&_nc_sid=86f79a",
									"config_width": 1080,
									"config_height": 834
								}
							],
							"is_video": false,
							"media_preview": "ACogXUvnORyVADexJ4/T0rMQsfkHoTz+v+P4VauZWnldUKhQcAdOOuef89hRBApfLEYUdzwf04H41my1sOs8ID5pHzZ685O0j+feoZLqORCgByVABIHY8/n+tWfsm5sqVOecZ+Xjtk/0FV5YFQbQUyeuDnHtnnn379KNAsyG3cqC5AIUY5/Pp36+oqb7Sh//AFVSZnUAD5RjJB78/qauqWIB2jp6/wD1qHoG5K8CRS7pF3rj5eM5x3P/ANetCKVJ0K4woxx0x/LkVG+S2OwH+fcfmKaA4BCAHPH4fX/9dWvMl+RVmQAhIwpx3OSCeuD61VaOWYsOCU4wBgDPcAf/AK60c9N38PJx09KrRlmmYgHaw5zkcj9cYoVltuN3e5Atq7sNwGen/wCv/wCvWuLY46/ypIyQMjjHY9OP89c1MJFPO0/lWcm7lxWh/9k=",
							"tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTUxODY2MmNlMjAzNDcwOWEwMWU3Nzc2NmI0ODg0NzkyNTM2NTc2MDk3ODU2ODYwODA0In0sInNpZ25hdHVyZSI6IiJ9",
							"has_upcoming_event": false,
							"edge_media_to_tagged_user": {
								"edges": [
									{
										"node": {
											"user": {
												"full_name": "Bruce Springsteen",
												"id": "517058514",
												"is_verified": true,
												"profile_pic_url": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119222182_634363334143737_1414261714773807156_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_ohc=PpLTxS06UUgAX9tUC9l&edm=APU89FABAAAA&ccb=7-4&oh=6c767dfafde9efc2ed4d1b5810c401c5&oe=60E35F42&_nc_sid=86f79a",
												"username": "springsteen"
											},
											"x": 0.1328502415,
											"y": 0.4093909918
										}
									}
								]
							},
							"accessibility_caption": null,
							"edge_media_to_caption": {
								"edges": [
									{
										"node": {
											"text": "Bruce @Springsteen and I hoped that our podcast, Renegades: Born in the USA, would get people talking and thinking about some big issues, and it’s been great to see the discussion about fatherhood and what it means to be a man this past week. If you have questions or reactions about these or any other topics, leave them in the comments and I’ll answer back."
										}
									}
								]
							},
							"shortcode": "CMzuoWKgTKE",
							"edge_media_to_comment": {
								"count": 5661,
								"page_info": {
									"has_next_page": true,
									"end_cursor": ""
								}
							},
							"edge_media_to_sponsor_user": {
								"edges": []
							},
							"is_affiliate": false,
							"is_paid_partnership": false,
							"comments_disabled": false,
							"taken_at_timestamp": 1616603456,
							"edge_media_preview_like": {
								"count": 603507,
								"edges": []
							},
							"owner": {
								"id": "10206720",
								"username": "barackobama"
							},
							"location": null,
							"viewer_has_liked": false,
							"viewer_has_saved": false,
							"viewer_has_saved_to_collection": false,
							"viewer_in_photo_of_you": false,
							"viewer_can_reshare": true,
							"thumbnail_src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c163.0.1113.1113a/s640x640/164682770_884476722127044_1805233131296817338_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fEiP8j-KBooAX-Bh_yD&edm=APU89FABAAAA&ccb=7-4&oh=edca51d77d680faca8c85038852720c6&oe=60E2C5D6&_nc_sid=86f79a",
							"thumbnail_resources": [
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c163.0.1113.1113a/s150x150/164682770_884476722127044_1805233131296817338_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fEiP8j-KBooAX-Bh_yD&edm=APU89FABAAAA&ccb=7-4&oh=607f9cd2f667f51df1703b33bbae7c48&oe=60E2B466&_nc_sid=86f79a",
									"config_width": 150,
									"config_height": 150
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c163.0.1113.1113a/s240x240/164682770_884476722127044_1805233131296817338_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fEiP8j-KBooAX-Bh_yD&edm=APU89FABAAAA&ccb=7-4&oh=821cd8ef43440a11f7286c462b14df4d&oe=60E31AE4&_nc_sid=86f79a",
									"config_width": 240,
									"config_height": 240
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c163.0.1113.1113a/s320x320/164682770_884476722127044_1805233131296817338_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fEiP8j-KBooAX-Bh_yD&edm=APU89FABAAAA&ccb=7-4&oh=f30deb73807cb8187c4b7a7352a547b8&oe=60E426DE&_nc_sid=86f79a",
									"config_width": 320,
									"config_height": 320
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/e35/c163.0.1113.1113a/s480x480/164682770_884476722127044_1805233131296817338_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fEiP8j-KBooAX-Bh_yD&edm=APU89FABAAAA&ccb=7-4&oh=64e873898d957b26a822a564282bd815&oe=60E3FA5B&_nc_sid=86f79a",
									"config_width": 480,
									"config_height": 480
								},
								{
									"src": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c163.0.1113.1113a/s640x640/164682770_884476722127044_1805233131296817338_n.jpg?tp=1&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fEiP8j-KBooAX-Bh_yD&edm=APU89FABAAAA&ccb=7-4&oh=edca51d77d680faca8c85038852720c6&oe=60E2C5D6&_nc_sid=86f79a",
									"config_width": 640,
									"config_height": 640
								}
							],
							"coauthor_producers": []
						}
					}
				]
			}
		}
	},
	"status": "ok"
}
