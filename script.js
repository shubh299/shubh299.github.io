// function retrieve_project_list(filename){

// }

var project_json={
    "projects": [
        {
            "title": "Keyword extraction from text",
            "description": "A program to extract keyword from given text.",
            "link": "https://github.com/shubh299/KeywordExtraction"
        },
        {
            "title": "Virtual R&D Showcase",
            "description": "A virtual reality web app for showcasing R&D posters.",
            "link": "https://github.com/shubh299/SSD10-R-D-Showcase"
        },
        {
            "title": "A Peer-to-Peer File Sharing System",
            "description": "A set of Linux based command line systems to enable sharing of files between peers in absence of a central server.",
            "link": "https://github.com/shubh299/AdvancedOS/tree/main/Assignments/Peer_to_Peer_File_Sharing"
        },
        {
            "title": "A SDN based Network Packet Sniffer",
            "description": "A tool that leverages the concepts of Software Defined Networking to capture packets in the network for further analysis by the network administrator.",
            "link": "https://github.com/shubh299/SDN-Network-Sniffer"
        },
        {
            "title": "A Distributed IoT Platform",
            "description": "A distributed platform to host IoT applications developed by independen developers.",
            "link": "https://github.com/shubh299/IAS_Project"
        }
    ]
};

function add_projects(project_obj){
    $("#project-list").prepend(`<div class="col-md-4 project">
                                <h4 class="text-center">
                                <a href="`+project_obj["link"]+`">`+
                                project_obj["title"]+`</a></h4><p>`+
                                project_obj["description"]+`</p></div>`);
}

$(document).ready(function(){
    
    $("#navbar-toggler").click(function(){
        $("#navbar-menu").toggle();
    });

    $(window).scroll(function(){
        //console.log($(window).scrollTop());
        if($(window).scrollTop()<50){
            $("#scrollTopBtn").css("visibility","hidden");
        }
        else{
            $("#scrollTopBtn").css("visibility","visible");
        }
    });

    $("#scrollTopBtn").click(function(){
        $("html,body").animate( {scrollTop:0},"slow");
        return false;
    });
});